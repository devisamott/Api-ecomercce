import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriaController } from './categorias.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Categoria, CategoriaSchema } from 'src/schemas/categorias.schema';
import { Producto, ProductoSchema } from 'src/schemas/productos.schema';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categoria.name, schema: CategoriaSchema },
      { name: Producto.name, schema: ProductoSchema },
    ]),
    ProductosModule,
  ],
  controllers: [CategoriaController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
