import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TypeOfCarActionTypes, LoadTypeOfCarsSuccess, LoadTypeOfCarsFail } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TypeOfCarService } from '../../services/type-of-car.service';


@Injectable()
export class TypeOfCarEffects {
  @Effect()
  loadInsure$ = this.actions$.pipe(
    ofType(TypeOfCarActionTypes.LoadTypeOfCars),
    switchMap(() => this.typeOfCarService.find().pipe(
      map(data => {
        return new LoadTypeOfCarsSuccess({ typeOfCars: data });
      }),
      catchError(error => of(new LoadTypeOfCarsFail({ errorMessage: error })))
    ))
  );

  constructor(private actions$: Actions,
    private typeOfCarService: TypeOfCarService) { }
}
