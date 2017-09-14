import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDialogComponent } from './winner-dialog.component';
import {MdCardModule, MdDialogModule, MdDialogRef} from '@angular/material';

describe('WinnerDialogComponent', () => {
  let component: WinnerDialogComponent;
  let fixture: ComponentFixture<WinnerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
