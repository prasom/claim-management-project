import { Action } from '@ngrx/store';
import { IBaseState } from '../../../core/models/base-state.model';
import { IInsure } from '../../../core/models/insure.model';
import { TypeOfInsureActions, TypeOfInsureActionTypes } from '../actions';


export interface State extends IBaseState {
  typeOfInsures: IInsure[];
  selectedTypeOfInsure: IInsure;
}

export const initialState: State = {
  typeOfInsures: [],
  selectedTypeOfInsure: null,
  loading: false,
  loaded: false,
  error: false,
  errorMessage: ''
};

export function reducer(state = initialState, action: TypeOfInsureActions): State {
  switch (action.type) {
    case TypeOfInsureActionTypes.LoadTypeOfInsures: {
      return { ...state, loading: true };
    }
    case TypeOfInsureActionTypes.LoadTypeOfInsuresSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        typeOfInsures: action.payload.typeOfInsures
      };
    }
    case TypeOfInsureActionTypes.AddTypeOfInsures: {
      return { ...state, loading: true };
    }
    case TypeOfInsureActionTypes.AddTypeOfInsuresSuccess: {
      return { ...state, loading: false };
    }
    case TypeOfInsureActionTypes.UpdateTypeOfInsures: {
      return { ...state, loading: true };
    }
    case TypeOfInsureActionTypes.UpdateTypeOfInsuresSuccess: {
      return { ...state, loading: false };
    }
    case TypeOfInsureActionTypes.EditTypeOfInsures: {
      return { ...state, loading: true };
    }
    case TypeOfInsureActionTypes.EditTypeOfInsuresSuccess: {
      return { ...state, loading: false, selectedTypeOfInsure: action.payload.typeOfInsure };
    }
    case TypeOfInsureActionTypes.ErrorTypeOfInsures: {
      return { ...state, error: true, loading: false, errorMessage: action.payload.errorMessage };
    }
    default:
      return state;
  }
}

export const getTypeOfInsures = (state: State) => state.typeOfInsures;
export const getTypeOfInsureLoading = (state: State) => state.loading;
export const getTypeOfInsureLoaded = (state: State) => state.loaded;
export const getSelectedTypeOfInsure = (state: State) => state.selectedTypeOfInsure;
