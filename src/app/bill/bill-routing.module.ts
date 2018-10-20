import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillMainComponent } from './container/bill-main/bill-main.component';
import { BillListComponent } from './container/bill-list/bill-list.component';
import { BillDetailComponent } from './container/bill-detail/bill-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BillMainComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: BillListComponent },
          { path: ':id', component: BillDetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
