import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromCustomer from '../reducers/customer.reducer';

export const selectCustomerState = (state: fromFeature.CoreState) => state.customerState;

export const getCustomerItems = createSelector(
    selectCustomerState,
    fromCustomer.getCustomerItems
);

export const getCustomerItem = createSelector(
    selectCustomerState,
    fromCustomer.getCustomerItem
);

export const getCustomerItemsLoaded = createSelector(
    selectCustomerState,
    fromCustomer.getCustomerLoaded
);

export const getCustomerItemsLoading = createSelector(
    selectCustomerState,
    fromCustomer.getCustomerLoading
);


