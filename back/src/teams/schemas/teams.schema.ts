import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Prop()
  name: string;

  @Prop()
  thumbnail: string;

  @Prop([String])
  players: string[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
