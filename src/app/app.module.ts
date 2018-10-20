import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomSerializer, reducers } from './store';
import { RouterStateSerializer } from '@ngrx/router-store';
import { AppConfig } from '../environments/environment';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';





@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    CoreModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Claim Management Apps',
      logOnly: !AppConfig.production
    })
  ],
  providers: [
    ElectronService,
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: LOCALE_ID, useValue: 'th-TH' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
