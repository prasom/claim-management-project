
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppointmentCardComponent } from './core/container/appointment-card/appointment-card.component';
import { PrintBillComponent } from './core/container/print-bill/print-bill.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
    { path: 'parking', loadChildren: './parking-receive/parking-receive.module#ParkingReceiveModule' },
    { path: 'bill', loadChildren: './bill/bill.module#BillModule' },
    { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
    { path: 'print-card/:id', component: AppointmentCardComponent },
    { path: 'print-bill/:id', component: PrintBillComponent },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
