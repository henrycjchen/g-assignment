import { Model } from 'mongoose';
import { Channel } from './channel.schema';
export declare class ChannelService {
    private readonly channelModel;
    constructor(channelModel: Model<Channel>);
    findAll(): Promise<Channel[]>;
    findOne(id: string): Promise<Channel>;
}
