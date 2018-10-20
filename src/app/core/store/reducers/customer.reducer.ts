import { Action } from '@ngrx/store';
import { IBaseState } from '../../models/base-state.model';
import { ICustomerModel } from '../../models/customer.model';
import { CustomerActions, CustomerActionTypes } from '../actions';


export interface CustomerState extends IBaseState {
  customer: ICustomerModel[];
  viewCustomer: ICustomerModel;
}

export const initialState: CustomerState = {
  customer: [],
  viewCustomer: null,
  loaded: false,
  loading: false,
  error: false
};

export function reducer(state = initialState, action: CustomerActions): CustomerState {
  switch (action.type) {
    case CustomerActionTypes.LoadCustomers: {
      return {
        ...state,
        loading: true
      };
    }
    case CustomerActionTypes.LoadCustomersSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customer: action.payload.customers
      };
    }
    case CustomerActionTypes.LoadCustomersFail: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: action.payload.error
      };
    }
    case CustomerActionTypes.AddCustomer: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case CustomerActionTypes.AddCustomerSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customer: [action.payload.customer]
      };
    }
    case CustomerActionTypes.ViewCustomer: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case CustomerActionTypes.ViewCustomerSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        viewCustomer: action.payload.customer
      };
    }
    default:
      return state;
  }
}


export const getCustomerItems = (state: CustomerState) => state.customer;
export const getCustomerItem = (state: CustomerState) => state.viewCustomer;
export const getCustomerLoading = (state: CustomerState) => state.loading;
export const getCustomerLoaded = (state: CustomerState) => state.loading;

