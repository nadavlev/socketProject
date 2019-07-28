import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketIoMessagingService} from '../socketIoMessaging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-socketio',
  templateUrl: './socketio.component.html',
  styleUrls: ['./socketio.component.scss']
})
export class SocketioComponent implements OnInit, OnDestroy {
  recieveMessage: string;
  private subscription: Subscription;
  constructor(
    private socketIoService: SocketIoMessagingService
  ) { }

  ngOnInit() {
    this.subscription = this.socketIoService.message.subscribe(res => {
      console.log(res);
      this.recieveMessage = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendMessage(msg: string) {
    this.socketIoService.sendMessage(msg);
  }

}
