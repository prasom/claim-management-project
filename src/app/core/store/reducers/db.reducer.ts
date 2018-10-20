import { Action } from '@ngrx/store';
import { CoreActions, CoreActionTypes } from '../actions/db.actions';
import { IBaseState } from '../../models/base-state.model';

export interface DbState extends IBaseState {
  isDbConnected: boolean;
}

export const initialState: DbState = {
  loaded: false,
  loading: false,
  error: false,
  isDbConnected: false
};

export function reducer(state = initialState, action: CoreActions): DbState {
  switch (action.type) {

    case CoreActionTypes.ConnectDb:
      return {
        ...state,
        loading: true
      };
    case CoreActionTypes.ConnectDbSuccess:
      console.log('ConnectDbSuccess');
      return {
        ...state,
        isDbConnected: true,
        loading: false,
        loaded: true,
        error: false
      };
    case CoreActionTypes.ConnectDbFail:
      return {
        ...state,
        isDbConnected: false,
        loading: false,
        loaded: true,
        error: true
      };
    default:
      return state;
  }
}

export const getCoreLoading = (state: DbState) => state.loading;
export const getCoreLoaded = (state: DbState) => state.loading;
export const getIsDbConnected = (state: DbState) => state.isDbConnected;
