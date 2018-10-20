import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromFeature from './reducers';
import * as fromParkingReceive from './reducers/parking-receive.reducer';
import * as fromSelector from './selectors/parking-receive.selector';

import { LoadParkingReceives, ViewParkingReceives, AddParkingReceives, UpdateParkingReceives } from './actions/parking-receive.actions';
import { IParkingHistoryRequestModel } from '../../core/models/parking-receive.model';

@Injectable({
    providedIn: 'root'
})
export class ParkingReceiveStoreFacade {

    parkingHistoryItems$ = this.store.pipe(select(fromSelector.getParkingItems));
    parkingHistoryLoading$ = this.store.pipe(select(fromSelector.getParkingItemsLoading));
    parkingHistoryLoaded$ = this.store.pipe(select(fromSelector.getParkingItemsLoaded));

    selectedParkingHistoryItem$ = this.store.pipe(select(fromSelector.getParkingItem));

    constructor(private store: Store<fromFeature.State>) {
    }

    loadAllParkingHistoryItems(date: string) {
        this.store.dispatch(new LoadParkingReceives({ date: date }));
    }

    loadParkingHistoryById(id: string) {
        this.store.dispatch(new ViewParkingReceives({ id: id }));
    }

    addParkingHistory(request: IParkingHistoryRequestModel) {
        this.store.dispatch(new AddParkingReceives({ request: request }));
    }

    updateParkingHistory(request: IParkingHistoryRequestModel) {
        this.store.dispatch(new UpdateParkingReceives({ request: request }));
    }


}
