import { io, Socket } from 'socket.io-client';
import { PORT } from '@gradual/backend/conf/env';

const BaseUrl = `localhost:${PORT}`;

export function request(url: string, opts: RequestInit) {
  return fetch(url.startsWith('/') ? BaseUrl + url : url, opts);
}

let socket: Socket;
export function initSocketIO() {
  socket = io(`ws://${BaseUrl}/`, {
    reconnectionDelayMax: 10000,
    auth: {
      token: '123',
    },
    query: {
      'my-key': 'my-value',
    },
  });
}

export function ioRuqest(url: string, data: any) {
  return socket.emit(url, data);
}
