import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromParking from '../reducers/parking-receive.reducer';


export const getCompleteParkingState = createSelector(
    fromFeature.getParkingState,
    (state: fromFeature.State) => state.parkingReceiveState
  );


export const getParkingItems = createSelector(
    getCompleteParkingState,
    fromParking.getParkingHistoryItems
);

export const getParkingItem = createSelector(
    getCompleteParkingState,
    fromParking.getParkingHistoryItem
);

export const getParkingItemsLoaded = createSelector(
    getCompleteParkingState,
    fromParking.getParkingHistoryLoaded
);

export const getParkingItemsLoading = createSelector(
    getCompleteParkingState,
    fromParking.getParkingHistoryLoading
);


