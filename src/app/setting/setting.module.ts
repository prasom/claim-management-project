import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { SettingMainComponent } from './container/setting-main/setting-main.component';
import { TypeOfCarListComponent } from './container/type-of-car-list/type-of-car-list.component';
import { TypeOfCarFormComponent } from './container/type-of-car-form/type-of-car-form.component';
import { TypeOfInsureListComponent } from './container/type-of-insure-list/type-of-insure-list.component';
import { TypeOfInsureFormComponent } from './container/type-of-insure-form/type-of-insure-form.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialHelperModule } from '../core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './container/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    SettingRoutingModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialHelperModule,
    FlexLayoutModule,
    StoreModule.forFeature('setting', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [SettingMainComponent, TypeOfCarListComponent, TypeOfCarFormComponent, TypeOfInsureListComponent, TypeOfInsureFormComponent, LogoComponent]
})
export class SettingModule { }
