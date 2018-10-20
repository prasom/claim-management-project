import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { effects } from './store/effects';
import { MaterialHelperModule } from './material.module';
import { CoreStoreFacade } from './store/core-store.facade';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '../shared/shared.module';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppConfig } from '../../environments/environment';
import { CustomRouterStateSerializer } from './core.custom-router-state-serializer.utils';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { AppointmentCardComponent } from './container/appointment-card/appointment-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PrintBillComponent } from './container/print-bill/print-bill.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialHelperModule,
    SharedModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'Family grocery list',
      logOnly: !AppConfig.production,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forFeature(effects)
  ],
  exports: [MaterialHelperModule],
  declarations: [AppointmentCardComponent, PrintBillComponent],
  entryComponents: [],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ]
})
export class CoreModule {
  constructor(
    private facade: CoreStoreFacade,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.facade.establishDbConnection();
    this.facade.loadInsures();
    this.facade.loadTypeOfCars();


    matIconRegistry.addSvgIcon('print',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icon/baseline-print-24px.svg'));
    matIconRegistry.addSvgIcon('edit',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icon/baseline-edit-24px.svg'));
    matIconRegistry.addSvgIcon('outline-check_box_outline_blank',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icon/outline-check_box_outline_blank-24px.svg'));
    matIconRegistry.addSvgIcon('outline-check_box',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/icon/outline-check_box-24px.svg'));
  }
}
