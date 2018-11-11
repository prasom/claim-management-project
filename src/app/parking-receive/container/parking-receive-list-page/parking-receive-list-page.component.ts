import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ICustomerModel } from '../../../core/models/customer.model';
import * as moment from 'moment';
import { ParkingHistoryViewModel } from '../../../core/models/parking-receive.model';
import { Observable } from 'rxjs';
import { ParkingReceiveStoreFacade } from '../../store/parking-receive-store.facade';

@Component({
  selector: 'parking-receive-list-page',
  templateUrl: './parking-receive-list-page.component.html',
  styleUrls: ['./parking-receive-list-page.component.css']
})
export class ParkingReceiveListPageComponent implements OnInit, AfterViewInit {

  searchForms: FormGroup;
  displayedColumns: string[] = ['insure_type_desc', 'contact_date', 'parking_date', 'brand', 'contact_tel', 'status'];
  parkingHistories$: Observable<ParkingHistoryViewModel[]> = this.parkingStoreFaced.parkingHistoryItems$;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<ICustomerModel>();

  constructor(
    private fb: FormBuilder,
    private parkingStoreFaced: ParkingReceiveStoreFacade
  ) { }

  ngOnInit() {
    this.searchForms = this.fb.group({
      contactDate: [moment().toDate(), Validators.required]
    });
    this.parkingStoreFaced.loadAllParkingHistoryItems(moment().toDate().toISOString());
    this.parkingHistories$.subscribe(items => {
      this.dataSource.data = items;
    });
  }

  searchCustomer() {
    this.parkingStoreFaced.loadAllParkingHistoryItems(this.searchForms.get('contactDate').value);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



}
