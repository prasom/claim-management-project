import { Action } from '@ngrx/store';
import { ITypeOfCar } from '../../../core/models/type-of-car.model';

export enum TypeOfCarActionTypes {
  LoadTypeOfCars = '[TypeOfCar] Load TypeOfCars',
  LoadTypeOfCarsSuccess = '[TypeOfCar] Load TypeOfCars Success',
  AddTypeOfCars = '[TypeOfCar] Add TypeOfCars',
  AddTypeOfCarsSuccess = '[TypeOfCar] Add TypeOfCars Success',
  UpdateTypeOfCars = '[TypeOfCar] Update TypeOfCars',
  UpdateTypeOfCarsSuccess = '[TypeOfCar] Update TypeOfCars Success',
  EditTypeOfCars = '[TypeOfCar] Edit TypeOfCars',
  EditTypeOfCarsSuccess = '[TypeOfCar] Edit TypeOfCars Success',
  ErrorTypeOfCars = '[TypeOfCar] Error TypeOfCars',
}

export class LoadTypeOfCars implements Action {
  readonly type = TypeOfCarActionTypes.LoadTypeOfCars;
}


export class LoadTypeOfCarsSuccess implements Action {
  readonly type = TypeOfCarActionTypes.LoadTypeOfCarsSuccess;
  constructor(public payload: { typeOfCars: ITypeOfCar[] }) { }
}

export class AddTypeOfCars implements Action {
  readonly type = TypeOfCarActionTypes.AddTypeOfCars;
  constructor(public payload: { typeOfCar: ITypeOfCar }) { }
}

export class AddTypeOfCarsSuccess implements Action {
  readonly type = TypeOfCarActionTypes.AddTypeOfCarsSuccess;
  constructor(public payload: { typeOfCar: ITypeOfCar }) { }
}

export class UpdateTypeOfCars implements Action {
  readonly type = TypeOfCarActionTypes.UpdateTypeOfCars;
  constructor(public payload: { typeOfCar: ITypeOfCar }) { }
}

export class UpdateTypeOfCarsSuccess implements Action {
  readonly type = TypeOfCarActionTypes.UpdateTypeOfCarsSuccess;
  constructor(public payload: { typeOfCar: ITypeOfCar }) { }
}

export class EditTypeOfCars implements Action {
  readonly type = TypeOfCarActionTypes.EditTypeOfCars;
  constructor(public payload: { id: string }) { }
}

export class EditTypeOfCarsSuccess implements Action {
  readonly type = TypeOfCarActionTypes.EditTypeOfCarsSuccess;
  constructor(public payload: { typeOfCar: ITypeOfCar }) { }
}

export class ErrorTypeOfCars implements Action {
  readonly type = TypeOfCarActionTypes.ErrorTypeOfCars;
  constructor(public payload: { errorMessage: string }) { }
}


export type TypeOfCarActions = LoadTypeOfCars
  | LoadTypeOfCarsSuccess
  | AddTypeOfCars
  | AddTypeOfCarsSuccess
  | UpdateTypeOfCars
  | UpdateTypeOfCarsSuccess
  | EditTypeOfCars
  | EditTypeOfCarsSuccess
  | ErrorTypeOfCars;
