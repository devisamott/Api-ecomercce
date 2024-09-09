import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/e-comerce'),
    CategoriasModule,
    ProductosModule,
  ],
})
export class AppModule {}
