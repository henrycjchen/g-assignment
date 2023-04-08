import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { randomUUID } from 'crypto';
import { ObjectId } from 'mongoose';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';
import { ChannelService } from '../channel/channel.service';
import { UserService } from '../user/user.service';

/**
 * todo
 * 需要对缓存设计淘汰机制，并断开对应连接
 * 避免内存泄漏
 */
const clientCache: { client: Socket; userId?: string }[] = [];

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
