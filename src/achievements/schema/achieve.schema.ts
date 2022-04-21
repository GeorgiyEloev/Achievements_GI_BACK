import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AchieveDocument = Achieve & Document;

@Schema()
export class Achieve {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true })
  ver: string;
}

export const AchieveSchema = SchemaFactory.createForClass(Achieve);
