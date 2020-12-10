import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Player, PlayerDocument } from './schemas/players.schema';

@Injectable()
export class PlayersService {
  constructor(@InjectModel(Player.name) private playerModel: Model<PlayerDocument>) {}

  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async filter(playersId: string[]): Promise<Player[]> {
    return this.playerModel.find({ _id: { $in: playersId } }).exec();
  }
}
