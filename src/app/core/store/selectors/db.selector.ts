import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromDb from '../reducers/db.reducer';


// grab the `family` piece of state from the state tree
export const selectDbState = (state: fromFeature.CoreState) => state.db;

export const getDbLoading = createSelector(
    selectDbState,
    fromDb.getCoreLoading
);

export const getDbLoaded = createSelector(
    selectDbState,
    fromDb.getCoreLoaded
);

export const getIsDbConnected = createSelector(
    selectDbState,
    fromDb.getIsDbConnected
);






