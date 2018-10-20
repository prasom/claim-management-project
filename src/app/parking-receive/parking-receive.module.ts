import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingReceiveRoutingModule } from './parking-receive-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromParkingReceive from './store/reducers/parking-receive.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ParkingReceiveEffects } from './store/effects/parking-receive.effects';
import { ParkingReceiveMainPageComponent } from './container/parking-receive-main-page/parking-receive-main-page.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ParkingReceiveListPageComponent } from './container/parking-receive-list-page/parking-receive-list-page.component';
import { ParkingReceiveDetailPageComponent } from './container/parking-receive-detail-page/parking-receive-detail-page.component';
import { MaterialHelperModule } from '../core/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ParkingReceiveRoutingModule,
    PerfectScrollbarModule,
    MaterialHelperModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    StoreModule.forFeature('parkingReceive', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [ParkingReceiveMainPageComponent, ParkingReceiveListPageComponent, ParkingReceiveDetailPageComponent]
})
export class ParkingReceiveModule { }
