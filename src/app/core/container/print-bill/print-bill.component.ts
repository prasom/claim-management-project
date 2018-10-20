import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreStoreFacade } from '../../store/core-store.facade';
import { ISettingModel } from '../../models/setting.model';
import { IBillFullViewModel } from '../../models/bill.model';
import { ActivatedRoute } from '@angular/router';
import { remote, webContents, BrowserWindow } from 'electron';
import * as moment from 'moment';

const mainprocess = remote.require('./main.js');

@Component({
  selector: 'print-bill',
  templateUrl: './print-bill.component.html',
  styleUrls: ['./print-bill.component.css']
})
export class PrintBillComponent implements OnInit {
  readonly months: string[] = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];
  logo: ISettingModel;
  billInfo: IBillFullViewModel;
  day: string;
  month: string;
  year: string;
  constructor(
    private storeCoreFacade: CoreStoreFacade,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.storeCoreFacade.loadSetting();
    this.storeCoreFacade.loadBillById(this.route.snapshot.paramMap.get('id'));
    this.storeCoreFacade.logo$.subscribe(logo => {
      this.logo = logo;
    });
    this.storeCoreFacade.selectedBill$.subscribe(bill => {
      this.billInfo = bill;
    });

    const today = moment().toDate();
    this.day = today.getDate().toString();
    this.month = this.months[today.getMonth()];
    this.year = (today.getFullYear() + 543).toString();

  }

  print() {
    mainprocess.print();
  }

  printPdf() {
    mainprocess.printPDF();
  }

}
