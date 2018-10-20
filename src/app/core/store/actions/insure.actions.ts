import { Action } from '@ngrx/store';
import { IInsure } from '../../models/insure.model';

export enum InsureActionTypes {
  LoadInsures = '[Insure] Load Insures',
  LoadInsuresSuccess = '[Insure] Load Insures Success',
  LoadInsuresFail = '[Insure] Load Insures Fail',
}

export class LoadInsures implements Action {
  readonly type = InsureActionTypes.LoadInsures;
}

export class LoadInsuresSuccess implements Action {
  readonly type = InsureActionTypes.LoadInsuresSuccess;
  constructor(public payload: { insures: IInsure[] }) { }
}

export class LoadInsuresFail implements Action {
  readonly type = InsureActionTypes.LoadInsuresFail;
  constructor(public payload: { error: any }) { }
}


export type InsureActions = LoadInsures
  | LoadInsuresSuccess
  | LoadInsuresFail;
