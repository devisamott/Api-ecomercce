import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriaDocument = Categoria & Document;

@Schema()
export class Categoria {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;
  static toObject: any;
}
export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
