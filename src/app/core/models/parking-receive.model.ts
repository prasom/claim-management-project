
import { ICustomerModel } from './customer.model';

export interface ParkingHistoryViewModel extends ICustomerModel {
    id_parking_history: number;
    claim_info_id: number;
    is_parking: boolean;
    create_date: any;
}

export interface IParkingHistoryRequestModel {
    id_parking_history?: number;
    claim_info_id: string;
    is_parking: boolean;
    create_date: any;
}

