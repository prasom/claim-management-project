import { Component, OnInit } from '@angular/core';
import { remote, webContents, BrowserWindow } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { SettingStoreFacade } from '../../../setting/store/setting-store.facade';
import { ISettingModel } from '../../models/setting.model';
import { ICustomerModel } from '../../models/customer.model';
import { CoreStoreFacade } from '../../store/core-store.facade';
import { ActivatedRoute } from '@angular/router';

const mainprocess = remote.require('./main.js');

@Component({
  selector: 'appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {


  logo: ISettingModel;
  claimInfo: ICustomerModel;

  constructor(
    private settingStore: SettingStoreFacade,
    private coreStore: CoreStoreFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.coreStore.loadSetting();
    this.coreStore.viewCustomer(this.route.snapshot.paramMap.get('id'));
    this.coreStore.logo$.subscribe(logo => {
      this.logo = logo;
    });
    this.coreStore.customerItem$.subscribe(customer => {
      this.claimInfo = customer;
    });
  }

  print() {
    mainprocess.print();
  }

  printPdf() {
    mainprocess.printPDF();
  }


}
