import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PlayerDocument = Player & Document;

@Schema()
export class Player {
  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  thumbnail: string;

  @Prop()
  born: string;

  @Prop({ type: { amount: { type: Number }, currency: { type: String } } })
  signin: { amount: number; currency: string; };
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
