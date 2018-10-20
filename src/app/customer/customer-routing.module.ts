import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListPageComponent } from './container/customer-list-page/customer-list-page.component';
import { CustomerInputComponent } from './container/customer-input/customer-input.component';
import { CustomerMainPageComponent } from './container/customer-main-page/customer-main-page.component';
import { CustomerDetailComponent } from './container/customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerMainPageComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'input', component: CustomerInputComponent },
          { path: '', component: CustomerListPageComponent },
          { path: ':id', component: CustomerDetailComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
