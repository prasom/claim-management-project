import * as fromFeature from '../reducers';
import * as fromTypeOfInsure from '../reducers/type-of-insure.reducer';
import { createSelector } from '@ngrx/store';

export const getTypeOfInsureState = createSelector(
    fromFeature.getSettingState,
    (state: fromFeature.SettingState) => state.typeOfInsureState
);

export const getTypeOfInsureItems = createSelector(
    getTypeOfInsureState,
    fromTypeOfInsure.getTypeOfInsures
);

export const getSelectedTypeOfInsure = createSelector(
    getTypeOfInsureState,
    fromTypeOfInsure.getSelectedTypeOfInsure
);

export const getTypeOfInsureLoaded = createSelector(
    getTypeOfInsureState,
    fromTypeOfInsure.getTypeOfInsureLoaded
);

export const getTypeOfInsureLoading = createSelector(
    getTypeOfInsureState,
    fromTypeOfInsure.getTypeOfInsureLoading
);

