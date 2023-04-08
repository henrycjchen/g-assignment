const BaseUrl = 'localhost:3000';
import { io, Socket } from 'socket.io-client';

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
