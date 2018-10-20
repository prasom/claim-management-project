import * as fromFeature from '../reducers';
import * as fromBill from '../reducers/bill.reducer';
import { createSelector } from '@ngrx/store';


export const selectBillState = (state: fromFeature.CoreState) => state.billState;


export const getAllBills = createSelector(
    selectBillState,
    fromBill.getBillItems
);

export const getSelectedBill = createSelector(
    selectBillState,
    fromBill.getSelectedBill
);

export const getBillLoading = createSelector(
    selectBillState,
    fromBill.getBillLoading
);

export const getBillLoaded = createSelector(
    selectBillState,
    fromBill.getBillLoaded
);
