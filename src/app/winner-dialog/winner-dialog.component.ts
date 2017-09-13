import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {IBid} from '../auction.interfaces';

@Component({
  selector: 'bid-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.sass']
})
export class WinnerDialogComponent {
  public bid: IBid;

  constructor(
    public dialogRef: MdDialogRef<WinnerDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: IBid) {
    this.bid = data;
  }
}
