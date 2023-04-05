import { ChannelService } from './channel.service';
import { Channel } from './channel.schema';
export declare class ChannelResolver {
    private readonly channelService;
    constructor(channelService: ChannelService);
    findAll(): Promise<Channel[]>;
    findOne(id: string): Promise<Channel>;
}
