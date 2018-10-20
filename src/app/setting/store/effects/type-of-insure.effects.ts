import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  TypeOfInsureActionTypes,
  LoadTypeOfInsuresSuccess,
  ErrorTypeOfInsures,
  EditTypeOfInsures,
  EditTypeOfInsuresSuccess,
  AddTypeOfInsures,
  AddTypeOfInsuresSuccess,
  UpdateTypeOfInsures,
  UpdateTypeOfInsuresSuccess
} from '../actions';
import { InsureService } from '../../../core/services/insure.service';
import { of } from 'rxjs';
import { NotificationService } from '../../../core/services/notification.service';


@Injectable()
export class TypeOfInsureEffects {
  @Effect()
  loadTypeOfInsure$ = this.actions$.pipe(
    ofType(TypeOfInsureActionTypes.LoadTypeOfInsures),
    switchMap(() => this.typeOfInsureService.find().pipe(
      map(data => {
        return new LoadTypeOfInsuresSuccess({ typeOfInsures: data });
      }),
      catchError(error => of(new ErrorTypeOfInsures({ errorMessage: error })))
    ))
  );

  @Effect()
  editTypeOfInsure$ = this.actions$.pipe(
    ofType<EditTypeOfInsures>(TypeOfInsureActionTypes.EditTypeOfInsures),
    map((action) => action.payload.id),
    switchMap((id) => this.typeOfInsureService.findOne(id).pipe(
      map(data => {
        return new EditTypeOfInsuresSuccess({ typeOfInsure: data });
      }),
      catchError(error => of(new ErrorTypeOfInsures({ errorMessage: error })))
    ))
  );

  @Effect()
  addTypeOfInsure$ = this.actions$.pipe(
    ofType<AddTypeOfInsures>(TypeOfInsureActionTypes.AddTypeOfInsures),
    map((action) => action.payload.typeOfInsure),
    switchMap((payload) => this.typeOfInsureService.add(payload).pipe(
      map(data => {
        this.notificationService.showInfo('Add insure success');
        return new AddTypeOfInsuresSuccess({ typeOfInsure: data });
      }),
      catchError(error => of(new ErrorTypeOfInsures({ errorMessage: error })))
    ))
  );

  @Effect()
  updateTypeOfInsure$ = this.actions$.pipe(
    ofType<UpdateTypeOfInsures>(TypeOfInsureActionTypes.UpdateTypeOfInsures),
    map((action) => action.payload.typeOfInsure),
    switchMap((payload) => this.typeOfInsureService.update(payload).pipe(
      map(data => {
        this.notificationService.showInfo('Update insure success');
        return new UpdateTypeOfInsuresSuccess({ typeOfInsure: data });
      }),
      catchError(error => of(new ErrorTypeOfInsures({ errorMessage: error })))
    ))
  );

  constructor(
    private actions$: Actions,
    private typeOfInsureService: InsureService,
    private notificationService: NotificationService
  ) { }
}
