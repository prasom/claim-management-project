import * as fromFeature from '../reducers';
import * as fromTypeOfCar from '../reducers/type-of-car.reducer';
import { createSelector } from '@ngrx/store';

export const getTypeOfCarState = createSelector(
    fromFeature.getSettingState,
    (state: fromFeature.SettingState) => state.typeOfCarState
);

export const getTypeOfCarItems = createSelector(
    getTypeOfCarState,
    fromTypeOfCar.getTypeOfCars
);

export const getSelectedTypeOfCar = createSelector(
    getTypeOfCarState,
    fromTypeOfCar.getSelectedTypeOfCar
);

export const getTypeOfCarLoaded = createSelector(
    getTypeOfCarState,
    fromTypeOfCar.getTypeOfCarLoaded
);

export const getTypeOfCarLoading = createSelector(
    getTypeOfCarState,
    fromTypeOfCar.getTypeOfCarLoading
);

