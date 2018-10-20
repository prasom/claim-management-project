import { Action } from '@ngrx/store';
import { ITypeOfCar } from '../../models/type-of-car.model';

export enum TypeOfCarActionTypes {
  LoadTypeOfCars = '[TypeOfCar] Load TypeOfCars',
  LoadTypeOfCarsSuccess = '[TypeOfCar] LoadTypeOfCarsSuccess',
  LoadTypeOfCarsFail = '[TypeOfCar] LoadTypeOfCarsFail',
}

export class LoadTypeOfCars implements Action {
  readonly type = TypeOfCarActionTypes.LoadTypeOfCars;
}

export class LoadTypeOfCarsSuccess implements Action {
  readonly type = TypeOfCarActionTypes.LoadTypeOfCarsSuccess;
  constructor(public payload: { typeOfCars: ITypeOfCar[] }) { }
}

export class LoadTypeOfCarsFail implements Action {
  readonly type = TypeOfCarActionTypes.LoadTypeOfCarsFail;
  constructor(public payload: { errorMessage: any }) { }
}

export type TypeOfCarActions = LoadTypeOfCars
  | LoadTypeOfCarsSuccess
  | LoadTypeOfCarsFail;
