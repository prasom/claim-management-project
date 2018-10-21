import { Injectable } from '@angular/core';
import * as fromReducers from './reducers';
import * as fromActions from './actions';
import * as fromSelector from './selectors';
import { Store, select } from '@ngrx/store';
import { ICustomerModel } from '../models/customer.model';
import { LoadSettings, UpdateLogo, LoadBills, ViewBills, AddBills, UpdateBills } from './actions';
import { IBillAddRequestModel } from '../models/bill.model';
import { ISettingModel } from '../models/setting.model';

@Injectable({
    providedIn: 'root'
})
export class CoreStoreFacade {

    insureItems$ = this.store.pipe(select(fromSelector.getInsureItems));
    insureItemsLoading$ = this.store.pipe(select(fromSelector.getInsureItemsLoading));
    insureItemsLoaded$ = this.store.pipe(select(fromSelector.getInsureItemsLoading));
    insureItemsError$ = this.store.pipe(select(fromSelector.getInsureItemsLoading));

    typeOfCarItems$ = this.store.pipe(select(fromSelector.getTypeOfCarItems));
    typeOfCarItemsLoaded$ = this.store.pipe(select(fromSelector.getTypeOfCarItemsLoaded));
    typeOfCarItemsLoading$ = this.store.pipe(select(fromSelector.getTypeOfCarItemsLoading));
    typeOfCarItemsError$ = this.store.pipe(select(fromSelector.getTypeOfCarItemsError));

    customerItems$ = this.store.pipe(select(fromSelector.getCustomerItems));
    customerItem$ = this.store.pipe(select(fromSelector.getCustomerItem));
    customerItemsLoading$ = this.store.pipe(select(fromSelector.getCustomerItemsLoading));
    customerItemsLoaded$ = this.store.pipe(select(fromSelector.getCustomerItemsLoaded));

    billsItems$ = this.store.pipe(select(fromSelector.getAllBills));
    selectedBill$ = this.store.pipe(select(fromSelector.getSelectedBill));
    billLoading$ = this.store.pipe(select(fromSelector.getBillLoading));
    billLoaded$ = this.store.pipe(select(fromSelector.getBillLoaded));


    logo$ = this.store.pipe(select(fromSelector.getLogoSetting));


    constructor(private store: Store<fromReducers.CoreState>) { }

    establishDbConnection() {
        this.store.dispatch(new fromActions.ConnectDb());
    }

    loadInsures() {
        this.store.dispatch(new fromActions.LoadInsures());
    }

    loadTypeOfCars() {
        this.store.dispatch(new fromActions.LoadTypeOfCars());
    }

    loadAllCustomer() {
        this.store.dispatch(new fromActions.LoadCustomers());
    }

    addCustomer(customer: ICustomerModel) {
        this.store.dispatch(new fromActions.AddCustomer({ customer: customer }));
    }

    updateCustomer(customer: ICustomerModel) {
        this.store.dispatch(new fromActions.UpdateCustomer({ customer: customer }));
    }

    viewCustomer(id: string) {
        this.store.dispatch(new fromActions.ViewCustomer({ customerId: id }));
    }

    loadSetting() {
        this.store.dispatch(new LoadSettings());
    }

    updateLogo(logo: ISettingModel) {
        this.store.dispatch(new UpdateLogo({ logo: logo }));
    }



    loadAllBills() {
        this.store.dispatch(new LoadBills());
    }

    loadBillById(id: string) {
        this.store.dispatch(new ViewBills({ id: id }));
    }

    addBill(request: IBillAddRequestModel) {
        this.store.dispatch(new AddBills({ request: request }));
    }

    updateBill(request: IBillAddRequestModel) {
        this.store.dispatch(new UpdateBills({ request: request }));
    }

}
