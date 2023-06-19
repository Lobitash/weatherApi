// import { Schema, Prop, SchemaFactory } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  id: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // @Prop()
  // role: Role => Define the enum File first

  @Prop()
  Avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
