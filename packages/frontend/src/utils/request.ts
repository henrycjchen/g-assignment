import { io, Socket } from 'socket.io-client';
import { getSearchParams } from './url';

const BaseUrl = `/api`;

export function request(url: string, opts: RequestInit) {
  return fetch(url.startsWith('/') ? BaseUrl + url : url, opts).then((v) =>
    v.json()
  );
}

let socket: Socket;
export function initSocketIO() {
  socket = io(`ws://${BaseUrl}/`, {
    reconnectionDelayMax: 10000,
    auth: {
      token: getSearchParams('userId'),
    },
  });
}

export function ioRuqest(url: string, data: any) {
  return socket.emit(url, data);
}
