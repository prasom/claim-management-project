import { Action } from '@ngrx/store';
import { ITypeOfCar } from '../../models/type-of-car.model';
import { IBaseState } from '../../models/base-state.model';
import { TypeOfCarActions, TypeOfCarActionTypes } from '../actions/type-of-car.actions';


export interface State extends IBaseState {
  typeOfCars: ITypeOfCar[];
  errorMessage: string;
}

export const initialState: State = {
  typeOfCars: [],
  loaded: false,
  loading: false,
  error: false,
  errorMessage: ''
};

export function reducer(state = initialState, action: TypeOfCarActions): State {
  switch (action.type) {
    case TypeOfCarActionTypes.LoadTypeOfCars: {
      return { ...state, loading: true };
    }
    case TypeOfCarActionTypes.LoadTypeOfCarsSuccess: {
      console.log('LoadTypeOfCarsSuccess', action.payload);

      return {
        ...state,
        loaded: true,
        loading: false,
        error: false,
        typeOfCars: action.payload.typeOfCars
      };
    }
    case TypeOfCarActionTypes.LoadTypeOfCarsFail: {
      return {
        ...state,
        error: true,
        loading: false,
        loaded: true,
        errorMessage: action.payload.errorMessage
      };
    }
    default:
      return state;
  }
}

export const getTypeOfCarItems = (state: State) =>
  state.typeOfCars;
export const getTypeOfCarItemsLoaded = (state: State) => state.loaded;
export const getTypeOfCarItemsLoading = (state: State) => state.loading;
export const getTypeOfCarItemsError = (state: State) => state.error;


