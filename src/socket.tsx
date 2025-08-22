import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  transports: ['websocket'],
  reconnection: true,
  autoConnect: false,
  withCredentials: true,
  auth: { token: localStorage.getItem('accessToken') },
});
