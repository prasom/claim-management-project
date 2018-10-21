import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ISettingModel } from '../models/setting.model';
import { DbConnectionService } from './db-connection.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private db: DbConnectionService) { }

  find(): Observable<ISettingModel[]> {
    const query = 'SELECT * FROM config_app';
    return this.db.query(query).pipe(
      map(data => {
        return data.map(d => {
          return { ...d };
        });
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  findOne(key: string): Observable<ISettingModel> {
    const query = 'SELECT * FROM config_app WHERE key = ?';
    return this.db.queryWithParams(query, [key]).pipe(
      map(data => {
        return { ...data[0] };
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }

  updateLogo(logo: ISettingModel) {
    const LOGO_KEY = 'LOGO';
    const query = 'UPDATE config_app SET `value` = ? WHERE `key` = ?';
    return this.db.exeNoneQuery(query, [logo.value, logo.key]).pipe(
      map(data => {
        return logo;
      }),
      catchError(error => {
        return Observable.throw(error);
      })
    );
  }
}
