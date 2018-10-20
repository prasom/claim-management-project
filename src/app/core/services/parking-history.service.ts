import { Injectable } from '@angular/core';
import { DbConnectionService } from './db-connection.service';
import { ParkingHistoryViewModel, IParkingHistoryRequestModel } from '../models/parking-receive.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ParkingHistoryService {

  constructor(private db: DbConnectionService) { }

  find(date: string): Observable<ParkingHistoryViewModel[]> {
    const query = 'select ci.*,ph.*,it.name as insure_type_desc,ct.name as car_type_desc from claim_info ci left join parking_history ph on ci.id = ph.claim_info_id left join insure_type it on ci.insure_ref_key = it.insure_type_id left join car_type ct on ci.car_type_id = ct.car_type_id where parking_date = ?';
    let filterDate: any;
    if (date) {
      filterDate = moment(date).format('YYYY-MM-DD');
    } else {
      filterDate = moment().format('YYYY-MM-DD');
    }
    return this.db.queryWithParams(query, filterDate).pipe(
      map(data => {
        return data.map(d => {
          let obj: ParkingHistoryViewModel = {
            ...d
          };
          return obj;
        });
      }),
    );

  }

  findOne(id: string): Observable<ParkingHistoryViewModel> {
    const query = 'select ci.*,ph.*,it.name as insure_type_desc,ct.name as car_type_desc from claim_info ci left join parking_history ph on ci.id = ph.claim_info_id left join insure_type it on ci.insure_ref_key = it.insure_type_id left join car_type ct on ci.car_type_id = ct.car_type_id where ci.id = ?';
    return this.db.queryWithParams(query, [id]).pipe(
      map(data => {
        let obj: ParkingHistoryViewModel = {
          ...data[0]
        };
        return obj;
      }),
    );
  }

  add(request: IParkingHistoryRequestModel): Observable<IParkingHistoryRequestModel> {
    const query = 'INSERT INTO parking_history SET ?';
    return this.db.queryWithParams(query, request).pipe(
      map(data => data)
    );
  }

  update(request: IParkingHistoryRequestModel): Observable<IParkingHistoryRequestModel> {
    const query = 'UPDATE parking_history SET is_parking = ? WHERE id_parking_history = ?';
    return this.db.queryWithParams(query, [request.is_parking, request.id_parking_history]).pipe(
      map(data => data)
    );
  }
}
