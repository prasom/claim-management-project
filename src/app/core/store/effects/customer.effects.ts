import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerActionTypes, LoadCustomersSuccess, LoadCustomersFail, AddCustomerSuccess, ViewCustomer, ViewCustomerSuccess, UpdateCustomerSuccess } from '../actions/customer.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { CustomerService } from '../../../core/services/customer.service';
import { of } from 'rxjs';

import * as fromCustomerAction from '../actions';
import { NotificationService } from '../../../core/services/notification.service';
import { Router } from '@angular/router';

@Injectable()
export class CustomerEffects {

  @Effect()
  loadCustomers$ = this.actions$.pipe(
    ofType(CustomerActionTypes.LoadCustomers),
    switchMap(() => this.customerService.find()),
    map(customers => {
      return new LoadCustomersSuccess({ customers: customers });
    }),
    catchError(error => of(new LoadCustomersFail({ error: error })))
  );

  @Effect()
  viewCustomers$ = this.actions$.pipe(
    ofType<ViewCustomer>(CustomerActionTypes.ViewCustomer),
    map(action => action.payload.customerId),
    switchMap((id) => this.customerService.findOne(id)),
    map(customer => {
      return new ViewCustomerSuccess({ customer: customer });
    }),
    catchError(error => of(new LoadCustomersFail({ error: error })))
  );

  @Effect()
  addCustomer$ = this.actions$.pipe(
    ofType(CustomerActionTypes.AddCustomer),
    map((action: fromCustomerAction.AddCustomer) => action.payload.customer),
    switchMap(customer => {
      return this.customerService.add(customer).pipe(
        map(data => {
          this.notificationService.showInfo('Add customer success');
          return new AddCustomerSuccess({ customer: data });
        }),
        catchError(error => of(new LoadCustomersFail({ error: error })))
      );
    }),

  );

  @Effect()
  updateCustomer$ = this.actions$.pipe(
    ofType(CustomerActionTypes.UpdateCustomer),
    map((action: fromCustomerAction.UpdateCustomer) => action.payload.customer),
    switchMap(customer => {
      return this.customerService.update(customer).pipe(
        map(data => {
          this.notificationService.showInfo('Update customer success');
          return new AddCustomerSuccess({ customer: data });
        }),
        catchError(error => of(new LoadCustomersFail({ error: error })))
      );
    }),
  );

  @Effect({ dispatch: false })
  addCustomerSuccess$ = this.actions$.pipe(
    ofType<AddCustomerSuccess>(CustomerActionTypes.AddCustomerSuccess),
    map(action => action.payload),
    tap((payload) => {
      const { customer } = payload;
      console.log('addCustomerSuccess$ ==>>>', customer);
      this.router.navigate([`/customer/${customer.insertId}`]);
    })
  );

  @Effect({ dispatch: false })
  updateCustomerSuccess$ = this.actions$.pipe(
    ofType<UpdateCustomerSuccess>(CustomerActionTypes.UpdateCustomerSuccess),
    map(action => action.payload),
    tap((payload) => {
      const { customer } = payload;
      this.router.navigate([`/customer/${customer.insertId}`], { replaceUrl: true });
    })
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private notificationService: NotificationService,
    private router: Router
  ) { }
}
