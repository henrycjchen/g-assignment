import { Resolver, Query, Args } from '@nestjs/graphql';
import { ChannelService } from './channel.service';
import { Channel } from './channel.schema';
//import { Blog } from './blog.schema';

@Resolver(() => Channel)
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Query(() => [Channel], { name: 'channels' })
  async findAll(@Args('userId', { type: () => String }) userId: string) {
    return this.channelService.findByUserId(userId);
  }

  @Query(() => Channel, { name: 'channel' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.channelService.findOne(id);
  }

  // @Query(() => Channel, { name: 'channel' })
  // find(@Args('_id', { type: () => String }) id: string) {
  //   return this.channelService.fin (id);
  // }
}
