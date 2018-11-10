import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateThPipe } from './pipes/date.pipe';
import { MoneyPipe } from './pipes/money.pipe';

@NgModule({
  declarations: [
    DateThPipe,
    MoneyPipe
  ],
  exports: [
    DateThPipe,
    MoneyPipe
  ]
})
export class SharedModule { }
