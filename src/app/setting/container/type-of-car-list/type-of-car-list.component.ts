import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ITypeOfCar } from '../../../core/models/type-of-car.model';
import { SettingStoreFacade } from '../../store/setting-store.facade';

@Component({
  selector: 'type-of-car-list',
  templateUrl: './type-of-car-list.component.html',
  styleUrls: ['./type-of-car-list.component.css']
})
export class TypeOfCarListComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<ITypeOfCar>();
  displayedColumns = ['id', 'name'];

  constructor(private settingStore: SettingStoreFacade) { }

  ngOnInit() {
    this.settingStore.loadAllTypeOfCars();
    this.settingStore.typeOfCars$.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
