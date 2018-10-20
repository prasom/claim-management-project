
import { ICustomerModel } from './customer.model';

export interface IBillViewModel extends IBaseBillModel, ICustomerModel {
    id_bill_history: number;
}

export interface IBaseBillModel {
    claim_info_id: number;
    claim_no: string;
    amount: string;
    create_date: any;
}

export interface IBillFullViewModel extends IBillViewModel {
    insure_type_desc: string;
    car_type_desc: string;
}

export interface IBillAddRequestModel extends IBaseBillModel {
    id_bill_history?: number;
}
