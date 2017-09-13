import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuctionService} from './auction.service';
import {MdButtonModule, MdCardModule, MdDialogModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MinValidatorDirective } from './min-validator.directive';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MinValidatorDirective,
    WinnerDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    MdCardModule,
    MdDialogModule,
  ],
  entryComponents: [
    WinnerDialogComponent,
  ],
  providers: [AuctionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
