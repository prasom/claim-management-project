import { Action } from '@ngrx/store';
import { IInsure } from '../../models/insure.model';
import { IBaseState } from '../../models/base-state.model';
import { InsureActions, InsureActionTypes } from '../actions';


export interface State extends IBaseState {
  insures: IInsure[];
}

export const initialState: State = {
  insures: [],
  loaded: false,
  loading: false,
  error: false
};

export function reducer(state = initialState, action: InsureActions): State {
  switch (action.type) {
    case InsureActionTypes.LoadInsures: {
      return { ...state, loading: true };
    }
    case InsureActionTypes.LoadInsuresSuccess: {
      console.log('InsureActionTypes.LoadInsuresSuccess', action.payload.insures);
      return { ...state, loading: false, loaded: true, insures: action.payload.insures };
    }
    case InsureActionTypes.LoadInsuresFail: {
      return { ...state, loading: false, loaded: true, error: true, insures: [] };
    }
    default:
      return state;
  }
}

export const getInsureItems = (state: State) =>
  state.insures;
export const getInsureItemsLoaded = (state: State) => state.loaded;
export const getInsureItemsLoading = (state: State) => state.loading;
export const getInsureItemsError = (state: State) => state.error;


