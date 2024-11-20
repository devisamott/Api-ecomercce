import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto, ProductoDocument } from 'src/schemas/productos.schema';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto.name) private productoModel: Model<ProductoDocument>,
  ) {}

  async crear(producto: Producto): Promise<Producto> {
    const nuevoProducto = new this.productoModel(producto);
    return nuevoProducto.save();
  }

  async obtenerTodas(): Promise<Producto[]> {
    return this.productoModel.find().populate('categoria').exec();
  }

  async obtenerPorSlug(slug: string): Promise<Producto> {
    const producto = await this.productoModel
      .findOne({ slug })
      .populate('categoria')
      .exec();
    return producto;
  }

  async obtenerEnDescuento(): Promise<Producto[]> {
    return this.productoModel.find({ enDescuento: true }).exec();
  }
}
