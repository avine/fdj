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

  async filter(teamsId: string[]): Promise<Pick<TeamDocument, 'name' | 'thumbnail'>[]> {
    return this.teamModel.find({ _id: { $in: teamsId } }, { name: 1, thumbnail: 1 }).exec();
  }

  async findPlayers(teamId: string): Promise<string[]> {
    const data = await this.teamModel
      .findOne({ _id: teamId }, { players: 1 })
      .exec();
    return data?.players;
  }

  async findPlayersByTeamName(teamName: string): Promise<string[]> {
    const data = await this.teamModel
      .findOne({ name: teamName }, { players: 1 })
      .exec();
    return data?.players;
  }
}
