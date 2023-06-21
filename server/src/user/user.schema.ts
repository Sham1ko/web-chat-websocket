import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;
}

export type ProductDocument = HydratedDocument<User>;
export const ProductSchema = SchemaFactory.createForClass(User);
