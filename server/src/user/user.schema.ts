import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class User {
  @Field((type) => ID)
  _id: number;

  @Prop()
  @Field((type) => String, { description: 'User name' })
  name: string;

  @Prop({ unique: true })
  @Field((type) => String, { description: 'User email' })
  email: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
