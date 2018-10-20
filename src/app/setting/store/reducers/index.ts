import * as fromTypeOfCar from '../reducers/type-of-car.reducer';
import * as fromTypeOfInsure from '../reducers/type-of-insure.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SettingState {
    typeOfCarState: fromTypeOfCar.State;
    typeOfInsureState: fromTypeOfInsure.State;
}

export const reducers: ActionReducerMap<SettingState> = {
    typeOfCarState: fromTypeOfCar.reducer,
    typeOfInsureState: fromTypeOfInsure.reducer,
};


export const getSettingState = createFeatureSelector<SettingState>('setting');
