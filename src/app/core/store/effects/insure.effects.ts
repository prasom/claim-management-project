import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { InsureActionTypes, LoadInsuresSuccess, LoadInsuresFail } from '../actions';
import { InsureService } from '../../services/insure.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class InsureEffects {

  @Effect()
  loadInsure$ = this.actions$.pipe(
    ofType(InsureActionTypes.LoadInsures),
    switchMap(() => this.insureService.find().pipe(
      map(data => {
        console.log('loadInsure$', data);
        return new LoadInsuresSuccess({ insures: data });
      }),
      catchError(error => of(new LoadInsuresFail({ error: error })))
      ))
  );

  constructor(private actions$: Actions,
    private insureService: InsureService) { }
}
