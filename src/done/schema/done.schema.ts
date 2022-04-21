import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type DoneDocument = Done & Document;

@Schema()
export class Done {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Achieve',
    required: true,
  })
  achieveId: string;
}

export const DoneSchema = SchemaFactory.createForClass(Done);
