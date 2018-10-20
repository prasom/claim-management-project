import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromInsure from '../reducers/insure.reducer';


export const selectInsureState = (state: fromFeature.CoreState) => state.insureState;


export const getInsureItems = createSelector(
    selectInsureState,
    fromInsure.getInsureItems
);

export const getInsureItemsLoading = createSelector(
    selectInsureState,
    fromInsure.getInsureItemsLoading
);

export const getInsureItemsLoaded = createSelector(
    selectInsureState,
    fromInsure.getInsureItemsLoaded
);

export const getInsureItemsError = createSelector(
    selectInsureState,
    fromInsure.getInsureItemsError
);

