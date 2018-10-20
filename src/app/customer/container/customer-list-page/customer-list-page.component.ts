import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICustomerModel } from '../../../core/models/customer.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.css']
})
export class CustomerListPageComponent implements OnInit, AfterViewInit {

  customerItems$: Observable<ICustomerModel[]>;
  customerItemsLoading$: Observable<boolean>;
  customerItemsLoaded$: Observable<boolean>;

  displayedColumns: string[] = ['insure_type_desc', 'contact_date', 'brand', 'contact_tel', 'action'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<ICustomerModel>();
  searchForms: FormGroup;

  constructor(private facade: CoreStoreFacade, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.customerItems$ = this.facade.customerItems$;
    this.customerItemsLoading$ = this.facade.customerItemsLoading$;
    this.customerItemsLoaded$ = this.facade.customerItemsLoaded$;
    this.facade.loadAllCustomer();
    this.customerItems$.subscribe(data => {
      this.dataSource.data = data;
    });

    this.searchForms = this.fb.group({
      search: ['']
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  searchCustomer() {
    console.log(this.searchForms.get('search').value);
    this.dataSource.filter = this.searchForms.get('search').value;
  }

  print(element: ICustomerModel) {
    this.router.navigate([`print-card/${element.id}`]);
  }

}
