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
import { UserService } from '../user/user.service';

const clientCache: { client: Socket; userId?: ObjectId }[] = [];

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  constructor(private readonly userService: UserService) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  findAll(@MessageBody() data: any, @ConnectedSocket() client: Socket): void {
    const toClient = clientCache.find(
      (cache) => cache.userId.toString() === data.toUserId
    );

    toClient?.client.emit('message', data.message);
  }

  @SubscribeMessage('identity')
  async identity(
    @MessageBody() userId: string,
    @ConnectedSocket() client: Socket
  ): Promise<string> {
    const cache = clientCache.find((v) => v.client.id === client.id);
    try {
      const user = await this.userService.findOne(userId);
      cache.userId = user._id;
    } catch (e) {
      cache.client.disconnect();
    }
    return 'success ' + client.id;
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    clientCache.push({
      client,
    });
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {}
}
