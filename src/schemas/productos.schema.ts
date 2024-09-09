import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Categoria } from './categorias.schema';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  precio: number;

  @Prop()
  descripcion: string;

  // @Prop({ required: true })
  // enDescuento: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Categoria', required: true })
  categoria: Categoria;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
