import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Team, TeamDocument } from './schemas/teams.schema';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private leagueModel: Model<TeamDocument>,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.leagueModel.find().exec();
  }
}
