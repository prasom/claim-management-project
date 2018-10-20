import * as fromCore from './db.reducer';
import * as fromInsure from './insure.reducer';
import * as fromTypeOfCar from './type-of-car.reducer';
import * as fromCustomer from './customer.reducer';
import * as fromSetting from './setting.reducer';
import * as fromBill from './bill.reducer';
import { ActionReducerMap, createFeatureSelector, ActionReducer } from '@ngrx/store';
import { AppConfig } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface CoreState {
    router: RouterReducerState;
    db: fromCore.DbState;
    insureState: fromInsure.State;
    typeOfCarState: fromTypeOfCar.State;
    customerState: fromCustomer.CustomerState;
    settingState: fromSetting.State;
    billState: fromBill.State;
}

export const reducers: ActionReducerMap<CoreState> = {
    router: routerReducer,
    db: fromCore.reducer,
    insureState: fromInsure.reducer,
    typeOfCarState: fromTypeOfCar.reducer,
    customerState: fromCustomer.reducer,
    settingState: fromSetting.reducer,
    billState: fromBill.reducer
};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
    return (state: CoreState, action: any): CoreState => {
        console.info('state', state);
        console.info('action', action);
        return reducer(state, action);
    };
}

export const metaReducers = !AppConfig.production ? [logger, storeFreeze] : [];


