import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from 'src/schemas/productos.schema';
import { ProductosController } from './productos.controller';
import { ProductoService } from './productos.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producto.name, schema: ProductoSchema },
    ]),
  ],
  controllers: [ProductosController],
  providers: [ProductoService],
})
export class ProductosModule {}
