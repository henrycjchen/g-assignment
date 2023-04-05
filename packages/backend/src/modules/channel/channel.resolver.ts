import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChannelService } from './channel.service';
import { Channel } from './channel.schema';
//import { Blog } from './blog.schema';

@Resolver(() => Channel)
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Query(() => [Channel], { name: 'channels' })
  findAll() {
    return this.channelService.findAll();
  }

  @Query(() => Channel, { name: 'channel' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.channelService.findOne(id);
  }
}
