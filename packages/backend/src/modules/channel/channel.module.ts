import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelResolver } from './channel.resolver';
import { ChannelService } from './channel.service';
import { Channel, ChannelSchema } from './channel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Channel.name, schema: ChannelSchema }]),
  ],
  providers: [ChannelResolver, ChannelService],
  exports: [ChannelService],
})
export class ChannelModule {}
