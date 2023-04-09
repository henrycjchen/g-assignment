import { userId } from '@/store/user.store';
import { MessageInfo } from '@/types/channel.type';
import { io, Socket } from 'socket.io-client';

const BaseUrl = `/api`;

export function request(url: string, opts: RequestInit) {
  return fetch(url.startsWith('/') ? BaseUrl + url : url, opts).then((v) =>
    v.json()
  );
}

export let socket: Socket;
export function initSocketIO() {
  socket = io(`ws://localhost:3000/`, {
    reconnectionDelayMax: 10000,
    auth: {
      token: userId,
    },
  });
  socket.on('message', console.log);
}

const socketCache: Record<string, boolean> = {};
export function socketOnChannel(
  channelId: string,
  cb: (message: MessageInfo) => void
) {
  if (socketCache[channelId]) return;
  socketCache[channelId] = true;
  socket.on('message', cb);
}

export function ioRuqest(url: string, data: any) {
  return socket.emit(url, data);
}
