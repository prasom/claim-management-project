import { Action } from '@ngrx/store';
import { ICustomerModel } from '../../../core/models/customer.model';

export enum CustomerActionTypes {

  LoadCustomers = '[Customer] Load Customers',
  SearchCustomers = '[Customer] Search Customers',
  LoadCustomersSuccess = '[Customer] Load Customers Success',
  LoadCustomersFail = '[Customer] Load Customers Fail',

  AddCustomer = '[Customer] AddCustomer',
  AddCustomerSuccess = 'AddCustomerSuccess',

  UpdateCustomer = '[Customer] UpdateCustomer',
  UpdateCustomerSuccess = 'UpdateCustomerSuccess',

  ViewCustomer = '[Customer] View Customer',
  ViewCustomerSuccess = '[Customer] ViewCustomerSuccess'

}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class SearchCustomers implements Action {
  readonly type = CustomerActionTypes.SearchCustomers;
  constructor(public payload: { search: any }) { }
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersSuccess;
  constructor(public payload: { customers: any }) { }
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomersFail;
  constructor(public payload: { error: any }) { }
}

export class AddCustomer implements Action {
  readonly type = CustomerActionTypes.AddCustomer;
  constructor(public payload: { customer: ICustomerModel }) { }
}

export class AddCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.AddCustomerSuccess;
  constructor(public payload: { customer: ICustomerModel }) { }
}

export class ViewCustomer implements Action {
  readonly type = CustomerActionTypes.ViewCustomer;
  constructor(public payload: { customerId: string }) { }
}

export class ViewCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.ViewCustomerSuccess;
  constructor(public payload: { customer: ICustomerModel }) { }
}

export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UpdateCustomer;
  constructor(public payload: { customer: ICustomerModel }) { }
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerSuccess;
  constructor(public payload: { customer: ICustomerModel }) { }
}

export type CustomerActions = LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFail
  | SearchCustomers
  | AddCustomer
  | AddCustomerSuccess
  | ViewCustomer
  |ViewCustomerSuccess
  | UpdateCustomer
  | UpdateCustomerSuccess;
