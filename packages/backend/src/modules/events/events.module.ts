import { Module } from '@nestjs/common';
import { ChannelModule } from '../channel/channel.module';
import { UserModule } from '../user/user.module';
import { EventsGateway } from './events.gateway';

@Module({
  imports: [UserModule, ChannelModule],
  providers: [EventsGateway],
})
export class EventsModule {}
