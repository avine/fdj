import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Player, PlayerDocument } from './schemas/players.schema';

@Injectable()
export class PlayersService {
  constructor(@InjectModel(Player.name) private leagueModel: Model<PlayerDocument>) {}

  async findAll(): Promise<Player[]> {
    return this.leagueModel.find().exec();
  }
}
