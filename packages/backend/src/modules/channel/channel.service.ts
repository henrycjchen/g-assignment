import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Channel } from './channel.schema';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(Channel.name) private readonly channelModel: Model<Channel>
  ) {}

  async findAll(): Promise<Channel[]> {
    return this.channelModel.find().exec();
  }

  async findOne(id: string): Promise<Channel> {
    return this.channelModel.findOne({ _id: id }).exec();
  }

  async findByUserId(userId: string): Promise<Channel[]> {
    return this.channelModel
      .aggregate([
        {
          $match: { userIds: { $all: [new Types.ObjectId(userId)] } },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'userIds',
            foreignField: '_id',
            as: 'users',
          },
        },
      ])
      .exec();
  }
}
