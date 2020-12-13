import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { League, LeagueDocument } from './schemas/leagues.schema';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectModel(League.name) private leagueModel: Model<LeagueDocument>,
  ) {}

  findAll(): Promise<LeagueDocument[]> {
    return this.leagueModel.find().exec();
  }

  findAllNames(): Promise<Pick<LeagueDocument, '_id' | 'name'>[]> {
    return this.leagueModel.find({}, { name: 1 }).exec();
  }

  findOne(leagueId: string): Promise<LeagueDocument> {
    return this.leagueModel.findOne({ _id: leagueId }).exec();
  }

  async findOneByName(leagueName: string): Promise<LeagueDocument> {
    return await this.leagueModel.findOne({ name: leagueName }).exec();
  }
}
