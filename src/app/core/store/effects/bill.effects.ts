import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BillActionTypes, FailBillsAction, LoadBillsSuccess, ViewBillsSuccess, BillActions, AddBillsSuccess, UpdateBillsSuccess } from '../actions/bill.actions';
import { BillService } from '../../../core/services/bill.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromAction from '../actions';
import { NotificationService } from '../../../core/services/notification.service';

@Injectable()
export class BillEffects {

  @Effect()
  loadBills$ = this.actions$.pipe(
    ofType(BillActionTypes.LoadBills),
    switchMap(() => this.billService.find().pipe(
      map(data => new LoadBillsSuccess({ bills: data })),
      catchError(error => of(new FailBillsAction({ error: error })))
    ))
  );

  @Effect()
  viewBills$ = this.actions$.pipe(
    ofType(BillActionTypes.ViewBills),
    map((action: fromAction.ViewBills) => action.payload.id),
    switchMap((id) => this.billService.findOne(id).pipe(
      map(data => new ViewBillsSuccess({ bill: data })),
      catchError(error => of(new FailBillsAction({ error: error })))
    ))
  );

  @Effect()
  addBills$ = this.actions$.pipe(
    ofType(BillActionTypes.AddBills),
    map((action: fromAction.AddBills) => action.payload.request),
    switchMap((payload) => this.billService.add(payload).pipe(
      map(data => {
        this.notificationService.showInfo('Add bill success');
        return new AddBillsSuccess({ request: data });
      }),
      catchError(error => of(new FailBillsAction({ error: error })))
    ))
  );

  @Effect()
  updateBills$ = this.actions$.pipe(
    ofType(BillActionTypes.UpdateBills),
    map((action: fromAction.UpdateBills) => action.payload.request),
    switchMap((payload) => this.billService.update(payload).pipe(
      map(data => {
        this.notificationService.showInfo('Update bill success');
        return new UpdateBillsSuccess({ request: data });
      }),
      catchError(error => of(new FailBillsAction({ error: error })))
    ))
  );


  constructor(
    private actions$: Actions,
    private billService: BillService,
    private notificationService: NotificationService
  ) { }
}
