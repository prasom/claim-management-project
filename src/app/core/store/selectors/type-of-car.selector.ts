import * as fromFeature from '../reducers';
import * as fromTypeOfCar from '../reducers/type-of-car.reducer';
import { createSelector } from '@ngrx/store';

export const getCompleteTypeOfCarState = (state: fromFeature.CoreState) => state.typeOfCarState;

export const getTypeOfCarItems = createSelector(
    getCompleteTypeOfCarState,
    fromTypeOfCar.getTypeOfCarItems
);

export const getTypeOfCarItemsLoading = createSelector(
    getCompleteTypeOfCarState,
    fromTypeOfCar.getTypeOfCarItemsLoading
);

export const getTypeOfCarItemsLoaded = createSelector(
    getCompleteTypeOfCarState,
    fromTypeOfCar.getTypeOfCarItemsLoaded
);

export const getTypeOfCarItemsError = createSelector(
    getCompleteTypeOfCarState,
    fromTypeOfCar.getTypeOfCarItemsError
);
