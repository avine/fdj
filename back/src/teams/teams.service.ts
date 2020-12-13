import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Team, TeamDocument } from './schemas/teams.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  findAll(): Promise<TeamDocument[]> {
    return this.teamModel.find().exec();
  }

  async filter(
    teamsId: string[],
  ): Promise<Pick<TeamDocument, 'name' | 'thumbnail'>[]> {
    return this.teamModel
      .find({ _id: { $in: teamsId } }, { name: 1, thumbnail: 1 })
      .exec();
  }

  findOne(teamId: string): Promise<TeamDocument> {
    return this.teamModel.findOne({ _id: teamId }).exec();
  }

  findOneByName(teamName: string): Promise<TeamDocument> {
    return this.teamModel.findOne({ name: teamName }).exec();
  }
}
