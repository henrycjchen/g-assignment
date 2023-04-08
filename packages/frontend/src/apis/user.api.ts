import { io } from 'socket.io-client';

export function login() {
  const socket = io('ws://example.com/my-namespace', {
    reconnectionDelayMax: 10000,
    auth: {
      token: '123',
    },
    query: {
      'my-key': 'my-value',
    },
  });
}
