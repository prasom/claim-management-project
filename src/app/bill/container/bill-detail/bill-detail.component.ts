import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { IBillFullViewModel, IBillAddRequestModel } from '../../../core/models/bill.model';
import { Observable } from 'rxjs';
import { Validators, FormControl } from '@angular/forms';

import * as moment from 'moment';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';

@Component({
  selector: 'bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  PHONE_REGEX = /^\d+$/;
  selectedBill$: Observable<IBillFullViewModel>;
  billId: number;
  claimInfoId: number;

  claimNo = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required, Validators.pattern(this.PHONE_REGEX)]);

  constructor(
    private billStoreFaced: CoreStoreFacade,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.billStoreFaced.loadBillById(this.route.snapshot.paramMap.get('id'));
    this.selectedBill$ = this.billStoreFaced.selectedBill$;
    this.billStoreFaced.selectedBill$.subscribe(data => {
      if (data) {
        this.billId = data.id_bill_history;
        this.claimInfoId = data.id;
        this.claimNo.setValue(data.claim_no);
        this.price.setValue(data.amount);
      }
    });
  }

  submitBill() {
    this.price.markAsTouched();
    this.claimNo.markAsTouched();
    if (this.price.valid && this.claimNo.valid) {
      const request: IBillAddRequestModel = {
        claim_info_id: this.claimInfoId,
        id_bill_history: this.billId,
        claim_no: this.claimNo.value,
        amount: this.price.value,
        create_date: moment().toDate()
      };
      console.log(this.price);
      if (this.billId) {
        this.billStoreFaced.updateBill(request);
      } else {
        this.billStoreFaced.addBill(request);
      }
    }
  }

  cancel() {
    this.router.navigate(['bill']);
  }


}
