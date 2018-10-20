import { Action } from '@ngrx/store';
import { IBillViewModel, IBillFullViewModel, IBillAddRequestModel } from '../../../core/models/bill.model';

export enum BillActionTypes {

  LoadBills = '[Bill] Load Bills',
  LoadBillsSuccess = '[Bill] Load Bills Success',

  AddBills = '[Bill] Add Bills',
  AddBillsSuccess = '[Bill] Add Bills Success',

  UpdateBills = '[Bill] Update Bills',
  UpdateBillsSuccess = '[Bill] Update Bills Success',

  ViewBills = '[Bill] View Bills',
  ViewBillsSuccess = '[Bill] View Bills Success',

  FailBillsAction = '[Bill] Fail Bills Action',

}

export class LoadBills implements Action {
  readonly type = BillActionTypes.LoadBills;
}

export class LoadBillsSuccess implements Action {
  readonly type = BillActionTypes.LoadBillsSuccess;
  constructor(public payload: { bills: IBillFullViewModel[] }) { }
}

export class AddBills implements Action {
  readonly type = BillActionTypes.AddBills;
  constructor(public payload: { request: IBillAddRequestModel }) { }
}

export class AddBillsSuccess implements Action {
  readonly type = BillActionTypes.AddBillsSuccess;
  constructor(public payload: { request: IBillAddRequestModel }) { }
}

export class UpdateBills implements Action {
  readonly type = BillActionTypes.UpdateBills;
  constructor(public payload: { request: IBillAddRequestModel }) { }
}

export class UpdateBillsSuccess implements Action {
  readonly type = BillActionTypes.UpdateBillsSuccess;
  constructor(public payload: { request: IBillAddRequestModel }) { }
}

export class ViewBills implements Action {
  readonly type = BillActionTypes.ViewBills;
  constructor(public payload: { id: string }) { }
}

export class ViewBillsSuccess implements Action {
  readonly type = BillActionTypes.ViewBillsSuccess;
  constructor(public payload: { bill: IBillFullViewModel }) { }
}


export class FailBillsAction implements Action {
  readonly type = BillActionTypes.FailBillsAction;
  constructor(public payload: { error: string }) { }
}

export type BillActions = LoadBills
  | LoadBillsSuccess
  | AddBills
  | AddBillsSuccess
  | UpdateBills
  | UpdateBillsSuccess
  | ViewBills
  | ViewBillsSuccess
  | FailBillsAction;
