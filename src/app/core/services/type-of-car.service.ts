import { Injectable } from '@angular/core';
import { ITypeOfCar } from '../../core/models/type-of-car.model';
import { DbConnectionService } from './db-connection.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypeOfCarService {

  constructor(private db: DbConnectionService) { }

  find(): Observable<ITypeOfCar[]> {
    const query = 'SELECT * FROM car_type';
    return this.db.query(query).pipe(
      map(data => {
        return data.map(d => {
          let obj: ITypeOfCar = {
            create_date: d.create_date,
            car_type_id: d.car_type_id,
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

  findOne(id: any): Observable<ITypeOfCar> {
    const query = 'SELECT * FROM car_type WHERE car_type_id = ?';
    return this.db.queryWithParams(query, [id]).pipe(
      map(data => {
        return { ...data[0] };
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  add(parameters: ITypeOfCar) {
    const query = 'INSERT INTO car_type SET ?';
    return this.db.exeNoneQuery(query, parameters).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  update(parameters: ITypeOfCar) {
    const query = 'UPDATE car_type SET name = ? WHERE car_type_id = ?';
    return this.db.exeNoneQuery(query, [parameters.name, parameters.car_type_id]).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }
}
