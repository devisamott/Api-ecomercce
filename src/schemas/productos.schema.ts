import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  precio: number;

  @Prop()
  antes: number;

  @Prop()
  descripcion: string;

  @Prop({ default: false })
  enDescuento: boolean;

  @Prop()
  imagen: string;

  @Prop({ type: Types.ObjectId, ref: 'Categoria' })
  categoria: Types.ObjectId;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
