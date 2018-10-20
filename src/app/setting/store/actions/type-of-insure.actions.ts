import { Action } from '@ngrx/store';
import { IInsure } from '../../../core/models/insure.model';

export enum TypeOfInsureActionTypes {
  LoadTypeOfInsures = '[TypeOfInsure] Load TypeOfInsures',
  LoadTypeOfInsuresSuccess = '[TypeOfInsure] Load TypeOfInsures Success',
  AddTypeOfInsures = '[TypeOfInsure] Add TypeOfInsures',
  AddTypeOfInsuresSuccess = '[TypeOfInsure] Add TypeOfInsures Success',
  UpdateTypeOfInsures = '[TypeOfInsure] Update TypeOfInsures',
  UpdateTypeOfInsuresSuccess = '[TypeOfInsure] Update TypeOfInsures Success',
  EditTypeOfInsures = '[TypeOfInsure] Edit TypeOfInsures',
  EditTypeOfInsuresSuccess = '[TypeOfInsure] Edit TypeOfInsures Success',
  ErrorTypeOfInsures = '[TypeOfInsure] Error TypeOfInsures',
}

export class LoadTypeOfInsures implements Action {
  readonly type = TypeOfInsureActionTypes.LoadTypeOfInsures;
}

export class LoadTypeOfInsuresSuccess implements Action {
  readonly type = TypeOfInsureActionTypes.LoadTypeOfInsuresSuccess;
  constructor(public payload: { typeOfInsures: IInsure[] }) { }
}

export class AddTypeOfInsures implements Action {
  readonly type = TypeOfInsureActionTypes.AddTypeOfInsures;
  constructor(public payload: { typeOfInsure: IInsure }) { }
}

export class AddTypeOfInsuresSuccess implements Action {
  readonly type = TypeOfInsureActionTypes.AddTypeOfInsuresSuccess;
  constructor(public payload: { typeOfInsure: IInsure }) { }
}

export class UpdateTypeOfInsures implements Action {
  readonly type = TypeOfInsureActionTypes.UpdateTypeOfInsures;
  constructor(public payload: { typeOfInsure: IInsure }) { }
}

export class UpdateTypeOfInsuresSuccess implements Action {
  readonly type = TypeOfInsureActionTypes.UpdateTypeOfInsuresSuccess;
  constructor(public payload: { typeOfInsure: IInsure }) { }
}

export class EditTypeOfInsures implements Action {
  readonly type = TypeOfInsureActionTypes.EditTypeOfInsures;
  constructor(public payload: { id: string }) { }
}

export class EditTypeOfInsuresSuccess implements Action {
  readonly type = TypeOfInsureActionTypes.EditTypeOfInsuresSuccess;
  constructor(public payload: { typeOfInsure: IInsure }) { }
}

export class ErrorTypeOfInsures implements Action {
  readonly type = TypeOfInsureActionTypes.ErrorTypeOfInsures;
  constructor(public payload: { errorMessage: string }) { }
}

export type TypeOfInsureActions = LoadTypeOfInsures
  | LoadTypeOfInsuresSuccess
  | AddTypeOfInsures
  | AddTypeOfInsuresSuccess
  | UpdateTypeOfInsures
  | UpdateTypeOfInsuresSuccess
  | EditTypeOfInsures
  | EditTypeOfInsuresSuccess
  | ErrorTypeOfInsures;
