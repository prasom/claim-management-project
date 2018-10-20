import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TypeOfCarService } from '../../../core/services/type-of-car.service';
import { TypeOfCarActionTypes, TypeOfCarActions, EditTypeOfCars, EditTypeOfCarsSuccess, AddTypeOfCars, AddTypeOfCarsSuccess, UpdateTypeOfCars, UpdateTypeOfCarsSuccess } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoadTypeOfCarsSuccess, ErrorTypeOfCars } from '../actions';
import { of } from 'rxjs';
import { NotificationService } from '../../../core/services/notification.service';


@Injectable()
export class TypeOfCarEffects {

  @Effect()
  loadTypeOfCar$ = this.actions$.pipe(
    ofType(TypeOfCarActionTypes.LoadTypeOfCars),
    switchMap(() => this.typeOfCarService.find().pipe(
      map(data => {
        return new LoadTypeOfCarsSuccess({ typeOfCars: data });
      }),
      catchError(error => of(new ErrorTypeOfCars({ errorMessage: error })))
    ))
  );

  @Effect()
  editTypeOfCar$ = this.actions$.pipe(
    ofType<EditTypeOfCars>(TypeOfCarActionTypes.EditTypeOfCars),
    map((action) => action.payload.id),
    switchMap((id) => this.typeOfCarService.findOne(id).pipe(
      map(data => {
        return new EditTypeOfCarsSuccess({ typeOfCar: data });
      }),
      catchError(error => of(new ErrorTypeOfCars({ errorMessage: error })))
    ))
  );

  @Effect()
  addTypeOfCar$ = this.actions$.pipe(
    ofType<AddTypeOfCars>(TypeOfCarActionTypes.AddTypeOfCars),
    map((action) => action.payload.typeOfCar),
    switchMap((payload) => this.typeOfCarService.add(payload).pipe(
      map(data => {
        this.notificationService.showInfo('Add type of car success');
        return new AddTypeOfCarsSuccess({ typeOfCar: data });
      }),
      catchError(error => of(new ErrorTypeOfCars({ errorMessage: error })))
    ))
  );

  @Effect()
  updateTypeOfCar$ = this.actions$.pipe(
    ofType<UpdateTypeOfCars>(TypeOfCarActionTypes.UpdateTypeOfCars),
    map((action) => action.payload.typeOfCar),
    switchMap((payload) => this.typeOfCarService.update(payload).pipe(
      map(data => {
        this.notificationService.showInfo('Update type of car success');
        return new UpdateTypeOfCarsSuccess({ typeOfCar: data });
      }),
      catchError(error => of(new ErrorTypeOfCars({ errorMessage: error })))
    ))
  );


  constructor(private actions$: Actions, private typeOfCarService: TypeOfCarService, private notificationService: NotificationService) { }
}
