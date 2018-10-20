import { Action } from '@ngrx/store';
import { ParkingReceiveActions, ParkingReceiveActionTypes } from '../actions/parking-receive.actions';
import { IBaseState } from '../../../core/models/base-state.model';
import { ParkingHistoryViewModel } from '../../../core/models/parking-receive.model';

export interface State extends IBaseState {
  parkingHistories: ParkingHistoryViewModel[];
  selectedParkingHistory: ParkingHistoryViewModel;
}

export const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  parkingHistories: [],
  selectedParkingHistory: null,
};

export function reducer(state = initialState, action: ParkingReceiveActions): State {
  switch (action.type) {

    case ParkingReceiveActionTypes.LoadParkingReceives: {
      return {
        ...state,
        loading: true
      };
    }
    case ParkingReceiveActionTypes.LoadParkingReceivesSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        parkingHistories: action.payload.items
      };
    }
    case ParkingReceiveActionTypes.ViewParkingReceives: {
      return {
        ...state,
        loading: true,
      };
    }
    case ParkingReceiveActionTypes.ViewParkingReceivesSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedParkingHistory: action.payload.item
      };
    }
    case ParkingReceiveActionTypes.AddParkingReceives: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case ParkingReceiveActionTypes.AddParkingReceivesSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case ParkingReceiveActionTypes.UpdateParkingReceives: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case ParkingReceiveActionTypes.UpdateParkingReceivesSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }
    case ParkingReceiveActionTypes.ParkingReceivesFailAction: {
      return {
        ...state,
        error: false
      };
    }

    default:
      return state;
  }
}


export const getParkingHistoryItems = (state: State) => state.parkingHistories;
export const getParkingHistoryItem = (state: State) => state.selectedParkingHistory;
export const getParkingHistoryLoading = (state: State) => state.loading;
export const getParkingHistoryLoaded = (state: State) => state.loading;
