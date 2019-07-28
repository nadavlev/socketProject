import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {MessagesComponent} from './messages/messages.component';
import {SocketioComponent} from './socketio/socketio.component';


const routes: Routes = [
  // {
  //   path: 'message',
  //   component: MessagesComponent
  // },
  {
    path: 'socketio',
    component: SocketioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
