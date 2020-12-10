import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { League, LeagueDocument } from './schemas/leagues.schema';

@Injectable()
export class LeaguesService {
  constructor(@InjectModel(League.name) private leagueModel: Model<LeagueDocument>) {}

  findAll(): Promise<League[]> {
    return this.leagueModel.find().exec();
  }

  findAllNames(): Promise<League[]> {
    return this.leagueModel.find({}, { name: 1 }).exec();
  }

  async findTeams(leagueId: string): Promise<string[]> {
    const data = await this.leagueModel
      .findOne({ _id: leagueId }, { teams: 1 })
      .exec();
    return data?.teams;
  }
}
