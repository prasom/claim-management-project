import { Action } from '@ngrx/store';
import { BillActions, BillActionTypes } from '../actions/bill.actions';
import { IBaseState } from '../../../core/models/base-state.model';
import { IBillFullViewModel } from '../../../core/models/bill.model';

export interface State extends IBaseState {
  bills: IBillFullViewModel[];
  selectedBill: IBillFullViewModel;
}

export const initialState: State = {
  loaded: false,
  loading: false,
  error: false,
  bills: [],
  selectedBill: null,
  errorMessage: ''
};

export function reducer(state = initialState, action: BillActions): State {
  switch (action.type) {

    case BillActionTypes.LoadBills: {
      return {
        ...state,
        loading: true
      };

    }
    case BillActionTypes.LoadBillsSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        bills: action.payload.bills
      };
    }
    case BillActionTypes.AddBills: {
      return {
        ...state,
        loading: true
      };
    }
    case BillActionTypes.AddBillsSuccess: {
      return {
        ...state,
        loading: false,
      };
    }
    case BillActionTypes.UpdateBills: {
      return {
        ...state,
        loading: true,
      };
    }
    case BillActionTypes.UpdateBillsSuccess: {
      return {
        ...state,
        loading: false,
      };
    }
    case BillActionTypes.ViewBills: {
      return {
        ...state,
        loading: true,
      };
    }
    case BillActionTypes.ViewBillsSuccess: {
      return {
        ...state,
        loading: false,
        selectedBill: action.payload.bill
      };
    }
    case BillActionTypes.FailBillsAction: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:
      return state;
  }
}

export const getBillItems = (state: State) => state.bills;
export const getSelectedBill = (state: State) => state.selectedBill;
export const getBillLoading = (state: State) => state.loading;
export const getBillLoaded = (state: State) => state.loaded;
