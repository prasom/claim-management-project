import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
const mysql = (<any>window).require('mysql');

@Injectable({
  providedIn: 'root'
})
export class DbConnectionService {
  connection: any;
  constructor(

  ) {

  }

  initializeConnection(): Observable<boolean> {
    this.connection = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'admin1234',
      database: 'claim_db'
    });

    return Observable.create((observer: Observer<any>) => {
      this.connection.connect((err) => {
        if (err) {
          console.log('Error while establishing connection', err);
          observer.error(err);
        }
        observer.next(true);
        observer.complete();
      });
    });
  }

  query(sql: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.connection.query(sql, function (err, results, fields) {
        if (err) {
          observer.error(err);
        } else {
          observer.next(results);
          observer.complete();
        }
      });
    });
  }

  queryWithParams(sql: string, parameters: any): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.connection.query(sql, parameters, (err, res) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(res);
          observer.complete();
        }
      });
    });
  }

  exeNoneQuery(sql: string, parameters: any): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.connection.query(sql, parameters, (err, res) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(res);
          observer.complete();
        }
      });
    });
  }

}
