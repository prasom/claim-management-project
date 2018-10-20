import { Injectable } from '@angular/core';
import { DbConnectionService } from './db-connection.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private db: DbConnectionService) { }

  find(): Observable<ICustomerModel[]> {
    let query = 'SELECT ci.*,it.name as insure_type_desc,ct.name as car_type_desc FROM claim_info ci left join insure_type it on ci.insure_ref_key = it.insure_type_id left join car_type ct on ci.car_type_id = ct.car_type_id';
    return this.db.query(query).pipe(
      map(data => {
        console.log(`find custome`, data);
        return data.map(d => {
          let obj: ICustomerModel = {
            ...d
          };
          return obj;
        });
      }),
    );

  }

  findOne(id: string): Observable<ICustomerModel> {
    let query = 'SELECT ci.*,it.name as insure_type_desc,ct.name as car_type_desc FROM claim_info ci left join insure_type it on ci.insure_ref_key = it.insure_type_id left join car_type ct on ci.car_type_id = ct.car_type_id WHERE ci.id = ?';
    return this.db.queryWithParams(query, [id]).pipe(
      map(data => {
        let obj: ICustomerModel = {
          ...data[0]
        };
        return obj;
      }),
    );
  }

  add(customer: ICustomerModel): Observable<ICustomerModel> {
    let query = 'INSERT INTO claim_info SET ?';
    return this.db.exeNoneQuery(query, customer).pipe(
      map(data => {
        return data;
      }),
    );
  }

  update(customer: ICustomerModel): Observable<ICustomerModel> {
    const query = 'UPDATE claim_info SET contact_date = ?,insure_ref_key = ?,brand = ?,car_number = ?,customer_type = ?,service_level = ?,is_parking = ?,parking_date = ?,create_date = ?,update_date = ?,create_by = ?,car_type_id = ?,contact_tel = ?,car_type_other = ? WHERE id = ?';
    return this.db.exeNoneQuery(query,
      [customer.contact_date,
      customer.insure_ref_key,
      customer.brand,
      customer.car_number,
      customer.customer_type,
      customer.service_level,
      customer.is_parking,
      customer.parking_date,
      customer.create_date,
      customer.update_date,
      customer.create_by,
      customer.car_type_id,
      customer.contact_tel,
      customer.car_type_other,
      customer.id]).pipe(
        map(data => {
          return data;
        }),
      );
  }
}
