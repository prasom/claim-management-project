import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';
import { IInsure } from '../../../core/models/insure.model';
import { Observable } from 'rxjs';
import { ITypeOfCar } from '../../../core/models/type-of-car.model';
import { ICustomerModel } from '../../../core/models/customer.model';

import * as moment from 'moment';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material';
import { markFormGroupTouched, markFormGroupUntouched, markFormGroupDirty } from '../../../shared/utils/form-util';

@Component({
  selector: 'customer-input',
  templateUrl: './customer-input.component.html',
  styleUrls: ['./customer-input.component.css']
})
export class CustomerInputComponent implements OnInit {
  public fg: FormGroup;

  public insureItems$: Observable<IInsure[]>;
  public typeOfCarsItems$: Observable<ITypeOfCar[]>;
  public loading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private coreFaced: CoreStoreFacade) { }

  ngOnInit() {
    this.fg = this.fb.group({
      contactDate: [null, Validators.required],
      insureType: [null, Validators.required],
      typeOfCar: [null, Validators.required],
      brand: [null, Validators.required],
      carNo: [null, Validators.required],
      tel: [null, Validators.required],
      customerType: [null, Validators.required],
      level: [null, Validators.required],
      isAppointment: [false],
      parkingDate: [null, Validators.required],
    });
    this.fg.get('parkingDate').disable();
    this.insureItems$ = this.coreFaced.insureItems$;
    this.typeOfCarsItems$ = this.coreFaced.typeOfCarItems$;
    this.loading$ = this.coreFaced.customerItemsLoading$;
  }


  saveCustomer() {
    markFormGroupUntouched(this.fg);
    markFormGroupDirty(this.fg);
    if (this.fg.valid) {
      const request: ICustomerModel = {
        contact_date: moment(this.fg.get('contactDate').value).toDate(),
        insure_ref_key: this.fg.get('insureType').value,
        brand: this.fg.get('brand').value,
        car_number: this.fg.get('carNo').value,
        customer_type: this.fg.get('customerType').value,
        service_level: this.fg.get('level').value,
        is_parking: this.fg.get('isAppointment').value,
        parking_date: moment(this.fg.get('parkingDate').value).toDate(),
        create_date: moment().toDate(),
        update_date: moment().toDate(),
        create_by: 'demo',
        car_type_id: this.fg.get('typeOfCar').value,
        contact_tel: this.fg.get('tel').value,
        car_type_other: '',
      };
      this.coreFaced.addCustomer(request);
    }

  }

  cancel() {
    this.route.navigate(['/customer']);
  }

  onAppointmentChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.fg.get('parkingDate').enable();
      this.fg.get('parkingDate').setValidators(Validators.required);
      this.fg.get('parkingDate').reset();
    } else {
      this.fg.get('parkingDate').disable();
      this.fg.get('parkingDate').clearValidators();
      this.fg.get('parkingDate').reset();
    }
  }

}
