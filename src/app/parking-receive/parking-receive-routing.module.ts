import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingReceiveMainPageComponent } from './container/parking-receive-main-page/parking-receive-main-page.component';
import { ParkingReceiveListPageComponent } from './container/parking-receive-list-page/parking-receive-list-page.component';
import { ParkingReceiveDetailPageComponent } from './container/parking-receive-detail-page/parking-receive-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: ParkingReceiveMainPageComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: ParkingReceiveListPageComponent },
          { path: ':id', component: ParkingReceiveDetailPageComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingReceiveRoutingModule { }
