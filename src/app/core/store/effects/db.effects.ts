import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoreActionTypes, ConnectDbSuccess, ConnectDbFail } from '../actions/db.actions';
import { switchMap, tap, map, catchError } from 'rxjs/operators';
import { DbConnectionService } from '../../services/db-connection.service';
import { NotificationService } from '../../services/notification.service';
import { of } from 'rxjs';

@Injectable()
export class DbEffects {

  @Effect()
  connectDb$ = this.actions$.pipe(
    ofType(CoreActionTypes.ConnectDb),
    switchMap(() => {
      return this.dbConnnectionService.initializeConnection().pipe(
        tap(() =>
          this.notificationService.showInfo(
            'DB Connection success'
          )
        ),
        map(() => new ConnectDbSuccess()),
        catchError((error: any) => {
          this.notificationService.showError(`'Connection error' ${error}`);
          return of(new ConnectDbFail({ error: error }));
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private dbConnnectionService: DbConnectionService,
    private notificationService: NotificationService
  ) { }
}
