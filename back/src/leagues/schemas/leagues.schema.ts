import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LeagueDocument = League & Document;

@Schema()
export class League {
  @Prop()
  name: string;

  @Prop()
  sport: string;

  @Prop([String])
  teams: string[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);
