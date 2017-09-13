import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuctionService} from './auction.service';
import {MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MinValidatorDirective } from './min-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MinValidatorDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    FormsModule,
    MdCardModule,
  ],
  providers: [AuctionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
