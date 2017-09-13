import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuctionService {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io();
  }

  emitEventOnBidShared(bidShared) {
    this.socket.emit('bidShared', bidShared);
  }

  getSharedBids() {
    const observable = new Observable(observer => {
      this.socket.on('bidShared', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
