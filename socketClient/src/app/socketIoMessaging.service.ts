import {Injectable, NgZone} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketIoMessagingService {

  message = this.socket.fromEvent<string>('message');
  messages = this.socket.fromEvent<string[]>('messages');

  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

}
