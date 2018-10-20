import { Injectable } from '@angular/core';
import { DbConnectionService } from './db-connection.service';
import { IBillFullViewModel, IBillAddRequestModel } from '../models/bill.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private db: DbConnectionService) { }

  find(): Observable<IBillFullViewModel[]> {
    const query = 'select ci.*,bh.*,it.name as insure_type_desc,ct.name as car_type_desc from claim_info ci inner join parking_history ph on ci.id = ph.claim_info_id left join bill_history bh on ci.id = bh.claim_info_id left join insure_type it on ci.insure_ref_key = it.insure_type_id left join car_type ct on ci.car_type_id = ct.car_type_id';
    return this.db.query(query).pipe(
      map(data => {
        return data.map(d => {
          let obj: IBillFullViewModel = {
            ...d
          };
          return obj;
        });
      }),
    );

  }

  findOne(id: string): Observable<IBillFullViewModel> {
    const query = 'select ci.*,bh.*,it.name as insure_type_desc,ct.name as car_type_desc from claim_info ci inner join parking_history ph on ci.id = ph.claim_info_id left join bill_history bh on ci.id = bh.claim_info_id left join insure_type it on ci.insure_ref_key = it.insure_type_id left join car_type ct on ci.car_type_id = ct.car_type_id where ci.id = ?';
    return this.db.queryWithParams(query, [id]).pipe(
      map(data => {
        let obj: IBillFullViewModel = {
          ...data[0]
        };
        return obj;
      }),
    );
  }

  add(request: IBillAddRequestModel): Observable<IBillAddRequestModel> {
    const query = 'INSERT INTO bill_history SET ?';
    return this.db.exeNoneQuery(query, request).pipe(
      map(data => {
        return data;
      }),
    );
  }

  update(request: IBillAddRequestModel): Observable<IBillAddRequestModel> {
    const query = 'UPDATE bill_history SET claim_no = ?,amount = ? WHERE id_bill_history = ?';

    return this.db.exeNoneQuery(query, [request.claim_no, request.amount, request.id_bill_history]).pipe(
      map(data => data)
    );
  }
}
