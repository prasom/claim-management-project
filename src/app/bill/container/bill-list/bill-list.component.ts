import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBillFullViewModel } from '../../../core/models/bill.model';
import { Observable } from 'rxjs';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  bills$: Observable<IBillFullViewModel[]>;

  search = new FormControl('', []);

  displayedColumns: string[] = ['insure_type_desc', 'contact_date', 'brand', 'contact_tel', 'status', 'action'];
  dataSource = new MatTableDataSource<IBillFullViewModel>();
  constructor(
    private billStoreFacade: CoreStoreFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.billStoreFacade.loadAllBills();
    this.billStoreFacade.billsItems$.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  print(element: IBillFullViewModel) {
    this.router.navigate([`print-bill/${element.id}`]);
  }

  searchBill() {
    this.dataSource.filter = this.search.value;
  }

}
