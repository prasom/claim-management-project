
// export interface ICustomer {
//     id?: number;
//     contact_date: any;
//     insure_ref_key: string;
//     brand: string;
//     car_number: string;
//     customer_type: string;
//     service_level: string;
//     is_parking: boolean;
//     parking_date: any;
//     create_date: any;
//     update_date: any;
//     create_by: any;
//     car_type_id: string;
//     contact_tel: string;
//     car_type_other: string;
//     insure_type_desc?: string;
//     car_type_desc?: string;
// }


export interface ICustomerModel {
    id?: number;
    contact_date: any;
    insure_ref_key: string;
    brand: string;
    car_number: string;
    customer_type: string;
    service_level: string;
    is_parking: boolean;
    parking_date: any;
    create_date: any;
    update_date: any;
    create_by: any;
    car_type_id: string;
    contact_tel: string;
    car_type_other: string;
    insure_type_desc?: string;
    car_type_desc?: string;
    bill_status?: string;
}

