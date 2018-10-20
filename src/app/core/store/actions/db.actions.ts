import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  ConnectDb = '[Core] ConnectDb',
  ConnectDbSuccess = '[Core] ConnectDb Success',
  ConnectDbFail = '[Core] ConnectDb Fail',
}

export class ConnectDb implements Action {
  readonly type = CoreActionTypes.ConnectDb;
}

export class ConnectDbSuccess implements Action {
  readonly type = CoreActionTypes.ConnectDbSuccess;
}

export class ConnectDbFail implements Action {
  readonly type = CoreActionTypes.ConnectDbFail;
  constructor(public payload: { error: any }) { }
}




export type CoreActions = ConnectDb
  | ConnectDbSuccess
  | ConnectDbFail;
