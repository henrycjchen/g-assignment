import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
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
    socket.to(data.channelId).emit('message', data.message);
  }

  // @SubscribeMessage('identity')
  // async identity(
  //   @MessageBody() userId: string,
  //   @ConnectedSocket() socket: Socket
  //   // @WebSocketServer() server: Server,
  // ): Promise<string> {
  //   try {
  //     // const user = await this.userService.findOne(userId);
  //     // const cache = clientCache.some((v) => v.client.id === socket.id);
  //     // if (!cache) {
  //     //   clientCache.push({
  //     //     socket,
  //     //     userId: user._id.toString(),
  //     //   });
  //     // }
  //     const channels = await this.channelService.findByUserId(userId);
  //     socket.join(channels.map((channel) => channel._id.toString()));
  //   } catch (e) {
  //     console.error('identity e', e);
  //   }
  //   return 'success ' + socket.id;
  // }

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
    const channels = await this.channelService.findByUserId(
      socket.handshake.auth.token
    );
    channels.forEach((channel) => {
      socket.leave(channel._id.toString());
    });
  }
}
