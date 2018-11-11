import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SettingStoreFacade } from '../../store/setting-store.facade';
import { IInsure } from '../../../core/models/insure.model';

@Component({
  selector: 'type-of-insure-list',
  templateUrl: './type-of-insure-list.component.html',
  styleUrls: ['./type-of-insure-list.component.css']
})
export class TypeOfInsureListComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<IInsure>();
  displayedColumns = ['id', 'name'];

  constructor(private settingStoreFacade: SettingStoreFacade) { }

  ngOnInit() {
    this.settingStoreFacade.loadAllTypeOfInsures();
    this.settingStoreFacade.typeOfInsures$.subscribe(insures => {
      this.dataSource.data = insures;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
