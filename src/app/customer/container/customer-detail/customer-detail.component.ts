import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';
import { Observable } from 'rxjs';
import { ICustomerModel } from '../../../core/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IInsure } from '../../../core/models/insure.model';
import { ITypeOfCar } from '../../../core/models/type-of-car.model';
import { MatCheckboxChange } from '@angular/material';
import { withLatestFrom, takeLast, map, take } from 'rxjs/operators';
import { markFormGroupUntouched, markFormGroupDirty } from '../../../shared/utils/form-util';
import * as moment from 'moment';

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public customer$: Observable<ICustomerModel>;
  public isEdit: boolean = false;

  public fg: FormGroup;
  public insureItems$: Observable<IInsure[]>;
  public typeOfCarsItems$: Observable<ITypeOfCar[]>;

  constructor(
    private store: Store<any>,
    private coreFacade: CoreStoreFacade,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.coreFacade.viewCustomer(this.route.snapshot.paramMap.get('id'));
    this.customer$ = this.coreFacade.customerItem$;
    this.insureItems$ = this.coreFacade.insureItems$;
    this.typeOfCarsItems$ = this.coreFacade.typeOfCarItems$;

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

    this.coreFacade.customerItem$.subscribe(customer => {
      // console.log('this.coreFacade.customerItem$', customer);
      if (customer) {
        this.fg.get('contactDate').setValue(customer.contact_date);
        this.fg.get('insureType').setValue(parseInt(customer.insure_ref_key, 0));
        this.fg.get('typeOfCar').setValue(customer.car_type_id);
        this.fg.get('brand').setValue(customer.brand);
        this.fg.get('carNo').setValue(customer.car_number);
        this.fg.get('tel').setValue(customer.contact_tel);
        this.fg.get('customerType').setValue(customer.customer_type);
        this.fg.get('level').setValue(customer.service_level);
        this.fg.get('isAppointment').setValue(customer.is_parking);
        this.fg.get('parkingDate').setValue(customer.parking_date);
        if (customer.is_parking === false) {
          this.fg.get('parkingDate').disable();
          this.fg.get('parkingDate').clearValidators();
        }
      }

    });
  }

  onEdit() {
    this.isEdit = !this.isEdit;
  }


  cancel() {
    this.router.navigate(['/customer']);
  }

  updateCustomer() {
    markFormGroupUntouched(this.fg);
    markFormGroupDirty(this.fg);
    if (this.fg.valid) {
      const request: ICustomerModel = {
        id: parseInt(this.route.snapshot.paramMap.get('id'), 0),
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
      this.coreFacade.updateCustomer(request);
    }
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
