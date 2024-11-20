import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categoria, CategoriaDocument } from 'src/schemas/categorias.schema';
import { Producto, ProductoDocument } from 'src/schemas/productos.schema';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectModel(Categoria.name)
    private categoriaModel: Model<CategoriaDocument>,
    @InjectModel(Producto.name)
    private productoModel: Model<ProductoDocument>,
  ) {}

  async crear(categoria: Categoria): Promise<Categoria> {
    const nuevaCategoria = new this.categoriaModel(categoria);
    return nuevaCategoria.save();
  }

  async obtenerTodas(): Promise<any[]> {
    const categorias = await this.categoriaModel.find().exec();

    const categoriasConProductos = await Promise.all(
      categorias.map(async (categorias) => {
        const productos = await this.productoModel
          .find({ categoria: categorias._id })
          .exec();
        return { ...categorias.toObject(), productos };
      }),
    );
    return categoriasConProductos;
  }

  async obtenerPorSlug(
    slug: string,
  ): Promise<{ categoria: Categoria; productos: Producto[] }> {
    const categoria = await this.categoriaModel.findOne({ slug }).exec();
    console.log(categoria._id);

    const categoriaString = categoria._id.toString();

    const productos = await this.productoModel
      .find({ categoria: categoriaString })
      .exec();
    return { categoria, productos };
  }
}
