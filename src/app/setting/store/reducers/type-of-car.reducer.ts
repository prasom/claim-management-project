import { Action } from '@ngrx/store';
import { IBaseState } from '../../../core/models/base-state.model';
import { ITypeOfCar } from '../../../core/models/type-of-car.model';
import { TypeOfCarActions, TypeOfCarActionTypes } from '../actions';


export interface State extends IBaseState {
  typeOfCars: ITypeOfCar[];
  selectedTypeOfCar: ITypeOfCar;
}

export const initialState: State = {
  typeOfCars: [],
  selectedTypeOfCar: null,
  loading: false,
  loaded: false,
  error: false,
  errorMessage: ''
};

export function reducer(state = initialState, action: TypeOfCarActions): State {
  switch (action.type) {
    case TypeOfCarActionTypes.LoadTypeOfCars: {
      return { ...state, loading: true };
    }
    case TypeOfCarActionTypes.LoadTypeOfCarsSuccess: {
      return {
        ...state,
        loaded: true,
        loading: false,
        typeOfCars: action.payload.typeOfCars
      };
    }
    case TypeOfCarActionTypes.AddTypeOfCars: {
      return { ...state, loading: true };
    }
    case TypeOfCarActionTypes.AddTypeOfCarsSuccess: {
      return { ...state, loading: false };
    }
    case TypeOfCarActionTypes.UpdateTypeOfCars: {
      return { ...state, loading: true };
    }
    case TypeOfCarActionTypes.UpdateTypeOfCarsSuccess: {
      return { ...state, loading: false };
    }
    case TypeOfCarActionTypes.EditTypeOfCars: {
      return { ...state, loading: true };
    }
    case TypeOfCarActionTypes.EditTypeOfCarsSuccess: {
      return { ...state, loading: false, selectedTypeOfCar: action.payload.typeOfCar };
    }
    case TypeOfCarActionTypes.ErrorTypeOfCars: {
      return { ...state, error: false, loading: false, errorMessage: action.payload.errorMessage };
    }
    default:
      return state;
  }
}


export const getTypeOfCars = (state: State) => state.typeOfCars;
export const getTypeOfCarLoading = (state: State) => state.loading;
export const getTypeOfCarLoaded = (state: State) => state.loaded;
export const getSelectedTypeOfCar = (state: State) => state.selectedTypeOfCar;
