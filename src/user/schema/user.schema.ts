import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, default: 'Anonymous', unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: 'Anonymous' })
  name: string;

  @Prop({ required: true, default: 'default.png' })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
