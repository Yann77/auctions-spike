import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuctionService} from './auction.service';
import {IBid} from './auction.interfaces';

const RESERVED_PRICE: Number = 100;

@Component({
  selector: 'bid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: String = '';
  currentUserEntered: Boolean = false;
  reservedPrice = RESERVED_PRICE;
  currentBid: Number = RESERVED_PRICE;
  bids: Array<IBid> = [];
  connection;

  constructor(public auctionService: AuctionService) {
  }

  broadcastBid(): void {
    this.auctionService.emitEventOnBidShared({userName: this.currentUser, bidValue: this.currentBid} as IBid);
  }

  ngOnInit() {
    this.connection = this.auctionService.getSharedBids().subscribe((bid: IBid) => {
      this.bids.push(bid);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getHigherBid(): Number {
    if (!this.bids.length) {
      return this.reservedPrice;
    } else {
      return this.bids.reduce((max, p) => p.bidValue > max ? p.bidValue : max, this.bids[0].bidValue);
    }
  }
}
