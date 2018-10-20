import { Action } from '@ngrx/store';
import { ParkingHistoryViewModel, IParkingHistoryRequestModel } from '../../../core/models/parking-receive.model';

export enum ParkingReceiveActionTypes {
  LoadParkingReceives = '[ParkingReceive] Load ParkingReceives',
  LoadParkingReceivesSuccess = '[ParkingReceive] Load ParkingReceives Success',

  ViewParkingReceives = '[ParkingReceive] View ParkingReceives',
  ViewParkingReceivesSuccess = '[ParkingReceive] View ParkingReceives Success',

  AddParkingReceives = '[ParkingReceive] Add ParkingReceives',
  AddParkingReceivesSuccess = '[ParkingReceive] Add ParkingReceives Success',

  UpdateParkingReceives = '[ParkingReceive] Update ParkingReceives',
  UpdateParkingReceivesSuccess = '[ParkingReceive] Update ParkingReceives Success',

  ParkingReceivesFailAction = '[ParkingReceive] Load ParkingReceives Fail',
}

export class LoadParkingReceives implements Action {
  readonly type = ParkingReceiveActionTypes.LoadParkingReceives;
  constructor(public payload: { date: string }) { }
}

export class LoadParkingReceivesSuccess implements Action {
  readonly type = ParkingReceiveActionTypes.LoadParkingReceivesSuccess;
  constructor(public payload: { items: ParkingHistoryViewModel[] }) { }
}

export class ViewParkingReceives implements Action {
  readonly type = ParkingReceiveActionTypes.ViewParkingReceives;
  constructor(public payload: { id: string }) { }
}

export class ViewParkingReceivesSuccess implements Action {
  readonly type = ParkingReceiveActionTypes.ViewParkingReceivesSuccess;
  constructor(public payload: { item: ParkingHistoryViewModel }) { }
}

export class AddParkingReceives implements Action {
  readonly type = ParkingReceiveActionTypes.AddParkingReceives;
  constructor(public payload: { request: IParkingHistoryRequestModel }) { }
}

export class AddParkingReceivesSuccess implements Action {
  readonly type = ParkingReceiveActionTypes.AddParkingReceivesSuccess;
  constructor(public payload: { request: IParkingHistoryRequestModel }) { }
}

export class UpdateParkingReceives implements Action {
  readonly type = ParkingReceiveActionTypes.UpdateParkingReceives;
  constructor(public payload: { request: IParkingHistoryRequestModel }) { }
}

export class UpdateParkingReceivesSuccess implements Action {
  readonly type = ParkingReceiveActionTypes.UpdateParkingReceivesSuccess;
  constructor(public payload: { request: IParkingHistoryRequestModel }) { }
}

export class ParkingReceivesFailAction implements Action {
  readonly type = ParkingReceiveActionTypes.ParkingReceivesFailAction;
  constructor(public payload: { errorMessage: string }) { }
}

export type ParkingReceiveActions = LoadParkingReceives
  | LoadParkingReceivesSuccess
  | ParkingReceivesFailAction
  | ViewParkingReceives
  | ViewParkingReceivesSuccess
  | AddParkingReceives
  | AddParkingReceivesSuccess
  | UpdateParkingReceives
  | UpdateParkingReceivesSuccess;
