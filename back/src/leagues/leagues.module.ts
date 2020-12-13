import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LeaguesService } from './leagues.service';
import { League, LeagueSchema } from './schemas/leagues.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }]),
  ],
  providers: [LeaguesService],
  exports: [LeaguesService],
})
export class LeaguesModule {}
