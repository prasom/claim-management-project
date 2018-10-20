import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingMainComponent } from './container/setting-main/setting-main.component';
import { TypeOfCarListComponent } from './container/type-of-car-list/type-of-car-list.component';
import { TypeOfCarFormComponent } from './container/type-of-car-form/type-of-car-form.component';
import { TypeOfInsureListComponent } from './container/type-of-insure-list/type-of-insure-list.component';
import { TypeOfInsureFormComponent } from './container/type-of-insure-form/type-of-insure-form.component';
import { LogoComponent } from './container/logo/logo.component';

const routes: Routes = [
  {
    path: '',
    component: SettingMainComponent,
    children: [
      {
        path: 'typeofinsure', component: TypeOfInsureListComponent
      },
      {
        path: 'typeofinsure/:id', component: TypeOfInsureFormComponent
      },
      {
        path: 'typeofcar', component: TypeOfCarListComponent
      },
      {
        path: 'typeofcar/:id', component: TypeOfCarFormComponent
      },
      {
        path: 'logo', component: LogoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
