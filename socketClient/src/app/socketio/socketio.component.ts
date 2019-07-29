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
  private messageSub$: Subscription;
  constructor(
    private socketIoService: SocketIoMessagingService
  ) { }

  ngOnInit() {
    this.messageSub$ = this.socketIoService.message.subscribe(res => {
      console.log(res);
      this.recieveMessage = res;
    });
  }

  ngOnDestroy(): void {
    this.messageSub$.unsubscribe();
  }

  sendMessage(msg: string) {
    this.socketIoService.sendMessage(msg);
  }

}
