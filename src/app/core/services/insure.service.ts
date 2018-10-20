import { Injectable } from '@angular/core';
import { DbConnectionService } from './db-connection.service';
import { IInsure } from '../models/insure.model';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsureService {

  constructor(private db: DbConnectionService) { }

  find(): Observable<IInsure[]> {
    const query = 'SELECT * FROM insure_type';
    return this.db.query(query).pipe(
      map(data => {
        return data.map(d => {
          let obj: IInsure = {
            create_date: d.create_date,
            insure_type_id: d.insure_type_id,
            name: d.name,
            delete_flag: d.delete_flag
          };
          return obj;
        });
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  findOne(id: any): Observable<IInsure> {
    const query = 'SELECT * FROM insure_type WHERE insure_type_id = ?';
    return this.db.queryWithParams(query, [id]).pipe(
      map(data => {
        return { ...data[0] };
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  add(parameters: IInsure) {
    const query = 'INSERT INTO insure_type SET ?';
    return this.db.exeNoneQuery(query, parameters).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  update(parameters: IInsure) {
    const query = 'UPDATE insure_type SET name = ? WHERE insure_type_id = ?';
    return this.db.exeNoneQuery(query, [parameters.name, parameters.insure_type_id]).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

}
