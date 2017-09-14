import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuctionService} from './auction.service';
import {IBid} from './auction.interfaces';
import {MdDialog} from '@angular/material';
import {WinnerDialogComponent} from './winner-dialog/winner-dialog.component';

const RESERVED_PRICE: number = 100;

@Component({
  selector: 'bid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  currentUser: String = '';
  currentUserEntered: Boolean = false;
  reservedPrice = RESERVED_PRICE;
  currentBid: number = RESERVED_PRICE;
  bids: Array<IBid> = [];
  connection;

  constructor(public auctionService: AuctionService,
              public dialog: MdDialog) {}

  broadcastBid(): void {
    this.auctionService.emitEventOnBidShared({userName: this.currentUser, bidValue: this.currentBid} as IBid);
  }

  ngOnInit() {
    this.connection = this.auctionService.getSharedBids().subscribe((bid: IBid) => {
      this.bids.push(bid);
      this.currentBid = this.bids.reduce((max, p) => p.bidValue > max ? p.bidValue + 1 : max + 1, this.bids[0].bidValue);
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

  getFormattedBids(): String {
    return this.bids.map((bid) => {
      return bid.userName + ' has bet ' + bid.bidValue;
    }).join('\n');
  }

  showTheWinner(): void {
    const winnerUser: IBid = this.bids.reduce((max, p) => p.bidValue > max.bidValue ? p : max, this.bids[0]);
    const winnerPrice: Number = this.bids.filter((bid) => bid.userName !== winnerUser.userName)
      .reduce((max, p) => p.bidValue > max ? p.bidValue : max, this.bids[0].userName !== this.currentUser ?
        this.bids[0].bidValue : this.reservedPrice);

    this.dialog.open(WinnerDialogComponent, {
      width: '300px',
      data: {userName: winnerUser.userName, bidValue: winnerPrice || this.reservedPrice},
    });
  }

  resetBidHistory(): void {
    this.bids = [];
  }
}
