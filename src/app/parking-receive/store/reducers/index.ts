import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromParking from './parking-receive.reducer';

export interface State {
  parkingReceiveState: fromParking.State;
}

export const reducers: ActionReducerMap<State> = {
    parkingReceiveState: fromParking.reducer
};

export const getParkingState = createFeatureSelector<State>('parkingReceive');
