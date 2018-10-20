import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromReducer from './reducers';
import * as fromSelector from './selectors';
import * as fromRootSelector from '../../core/store/selectors';
import { LoadTypeOfCars, EditTypeOfCars, AddTypeOfCars, UpdateTypeOfCars } from './actions/type-of-car.actions';
import { LoadTypeOfInsures, EditTypeOfInsures, AddTypeOfInsures, UpdateTypeOfInsures } from './actions';
import { ITypeOfCar } from '../../core/models/type-of-car.model';
import { IInsure } from '../../core/models/insure.model';
import { LoadSettings, UpdateLogo } from '../../core/store/actions/setting.actions';

@Injectable({
    providedIn: 'root'
})
export class SettingStoreFacade {

    typeOfCars$ = this.store.pipe(select(fromSelector.getTypeOfCarItems));
    typeOfCarLoading$ = this.store.pipe(select(fromSelector.getTypeOfCarLoading));
    typeOfCarLoaded$ = this.store.pipe(select(fromSelector.getTypeOfCarLoaded));
    selectedTypeOfCar$ = this.store.pipe(select(fromSelector.getSelectedTypeOfCar));

    typeOfInsures$ = this.store.pipe(select(fromSelector.getTypeOfInsureItems));
    typeOfInsureLoading$ = this.store.pipe(select(fromSelector.getTypeOfInsureLoading));
    typeOfInsureLoaded$ = this.store.pipe(select(fromSelector.getTypeOfInsureLoaded));
    selectedTypeOfInsure$ = this.store.pipe(select(fromSelector.getSelectedTypeOfInsure));



    constructor(private store: Store<fromReducer.SettingState>) { }

    loadAllTypeOfCars() {
        this.store.dispatch(new LoadTypeOfCars());
    }

    loadTypeOfCarsById(id: string) {
        this.store.dispatch(new EditTypeOfCars({ id: id }));
    }

    addTypeOfCar(request: ITypeOfCar) {
        this.store.dispatch(new AddTypeOfCars({ typeOfCar: request }));
    }

    updateTypeOfCar(request: ITypeOfCar) {
        this.store.dispatch(new UpdateTypeOfCars({ typeOfCar: request }));
    }

    loadAllTypeOfInsures() {
        this.store.dispatch(new LoadTypeOfInsures());
    }

    loadTypeOfInsuresById(id: string) {
        this.store.dispatch(new EditTypeOfInsures({ id: id }));
    }

    addTypeOfInsure(request: IInsure) {
        this.store.dispatch(new AddTypeOfInsures({ typeOfInsure: request }));
    }

    updateTypeOfInsure(request: IInsure) {
        this.store.dispatch(new UpdateTypeOfInsures({ typeOfInsure: request }));
    }

    
}


