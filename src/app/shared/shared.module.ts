import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateThPipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    DateThPipe
  ],
  exports: [
    DateThPipe
  ]
})
export class SharedModule { }
