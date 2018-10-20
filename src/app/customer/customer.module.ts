import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './container/customer-list-page/customer-list-page.component';
import { MaterialHelperModule } from '../core/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerInputComponent } from './container/customer-input/customer-input.component';
import { CustomerMainPageComponent } from './container/customer-main-page/customer-main-page.component';
import { CustomerDetailComponent } from './container/customer-detail/customer-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialHelperModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [CustomerListPageComponent, CustomerInputComponent, CustomerMainPageComponent, CustomerDetailComponent]
})
export class CustomerModule { }
