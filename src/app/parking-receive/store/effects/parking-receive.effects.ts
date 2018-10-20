import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ParkingReceiveActionTypes, ParkingReceiveActions, ParkingReceivesFailAction } from '../actions/parking-receive.actions';
import * as fromAction from '../actions/parking-receive.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ParkingHistoryService } from '../../../core/services/parking-history.service';
import { of } from 'rxjs';
import { NotificationService } from '../../../core/services/notification.service';
@Injectable()
export class ParkingReceiveEffects {

  @Effect()
  loadAParkingItems$ = this.actions$.pipe(
    ofType(ParkingReceiveActionTypes.LoadParkingReceives),
    map((action: fromAction.LoadParkingReceives) => action.payload.date),
    switchMap((date) => this.parkingHistoryService.find(date).pipe(
      map(items => {
        return new fromAction.LoadParkingReceivesSuccess({ items: items });
      }),
      catchError(error => of(new ParkingReceivesFailAction({ errorMessage: error })))
    ))
  );

  @Effect()
  viewParkingHistory$ = this.actions$.pipe(
    ofType(ParkingReceiveActionTypes.ViewParkingReceives),
    map((action: fromAction.ViewParkingReceives) => action.payload.id),
    switchMap((id) => this.parkingHistoryService.findOne(id).pipe(
      map(data => {
        return new fromAction.ViewParkingReceivesSuccess({ item: data });
      }),
      catchError(error => of(new ParkingReceivesFailAction({ errorMessage: error })))
    ))
  );


  @Effect()
  addParkingItems$ = this.actions$.pipe(
    ofType(ParkingReceiveActionTypes.AddParkingReceives),
    map((action: fromAction.AddParkingReceives) => action.payload.request),
    switchMap((payload) => this.parkingHistoryService.add(payload).pipe(
      map(items => {
        this.notificationService.showInfo('Add success');
        return new fromAction.AddParkingReceivesSuccess({ request: items });
      }),
      catchError(error => of(new ParkingReceivesFailAction({ errorMessage: error })))
    ))
  );

  @Effect()
  updateParkingItems$ = this.actions$.pipe(
    ofType(ParkingReceiveActionTypes.UpdateParkingReceives),
    map((action: fromAction.UpdateParkingReceives) => action.payload.request),
    switchMap((payload) => this.parkingHistoryService.update(payload).pipe(
      map(items => {
        this.notificationService.showInfo('Update success');
        return new fromAction.UpdateParkingReceivesSuccess({ request: items });
      }),
      catchError(error => of(new ParkingReceivesFailAction({ errorMessage: error })))
    ))
  );



  constructor(
    private actions$: Actions,
    private parkingHistoryService: ParkingHistoryService,
    private notificationService: NotificationService
  ) { }
}
