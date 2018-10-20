import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BillListComponent } from './container/bill-list/bill-list.component';
import { BillMainComponent } from './container/bill-main/bill-main.component';
import { BillDetailComponent } from './container/bill-detail/bill-detail.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialHelperModule } from '../core/material.module';

@NgModule({
  imports: [
    CommonModule,
    BillRoutingModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    MaterialHelperModule,
    FormsModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [BillListComponent, BillMainComponent, BillDetailComponent]
})
export class BillModule { }
