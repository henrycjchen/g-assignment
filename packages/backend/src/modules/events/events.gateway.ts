import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { randomUUID } from 'crypto';
import { Server, Socket } from 'socket.io';
import { ChannelService } from '../channel/channel.service';
import { UserService } from '../user/user.service';

interface Message {
  channelId: string;
  message: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor(
    private readonly userService: UserService,
    private readonly channelService: ChannelService
  ) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  message(
    @MessageBody() data: Message,
    @ConnectedSocket() socket: Socket
  ): void {
    const message = {
      ...data,
      messageId: randomUUID(),
      timestamp: Date.now(),
      userId: socket.handshake.auth.token,
    };
    socket.to(data.channelId).emit('message', message);
    this.server.to(socket.id).emit('message', message);
  }

  /**
   * join rooms when socket connected
   */
  async handleConnection(@ConnectedSocket() socket: Socket) {
    const channels = await this.channelService.findByUserId(
      socket.handshake.auth.token
    );
    socket.join(channels.map((channel) => channel._id.toString()));
  }

  /**
   * leave rooms when socket disconnected
   */
  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    if (!socket.handshake.auth.token) return;
    const channels = await this.channelService.findByUserId(
      socket.handshake.auth.token
    );
    channels.forEach((channel) => {
      socket.leave(channel._id.toString());
    });
  }
}
