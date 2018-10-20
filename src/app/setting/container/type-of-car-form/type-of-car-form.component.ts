import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITypeOfCar } from '../../../core/models/type-of-car.model';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingStoreFacade } from '../../store/setting-store.facade';
import * as moment from 'moment';

@Component({
  selector: 'type-of-car-form',
  templateUrl: './type-of-car-form.component.html',
  styleUrls: ['./type-of-car-form.component.css']
})
export class TypeOfCarFormComponent implements OnInit {

  selectedTypeOfCar: ITypeOfCar;
  typeOfCarName = new FormControl(null, [Validators.required]);
  isEdit: boolean = false;
  isCreate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private settingStoreFacade: SettingStoreFacade
  ) { }

  ngOnInit() {
    this.settingStoreFacade.loadTypeOfCarsById(this.route.snapshot.paramMap.get('id'));
    if (this.route.snapshot.paramMap.get('id') === '0') {
      this.isCreate = true;
    }
    this.settingStoreFacade.selectedTypeOfCar$.subscribe(type => {
      if (type) {
        this.selectedTypeOfCar = type;
        this.typeOfCarName.setValue(type.name);
      }
    });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  cancel() {
    this.router.navigate(['/setting/typeofcar']);
  }

  submitInsure() {
    if (this.typeOfCarName.valid) {
      const request: ITypeOfCar = {
        car_type_id: this.selectedTypeOfCar.car_type_id,
        name: this.isCreate ? this.typeOfCarName.value : this.selectedTypeOfCar.name,
        delete_flag: false,
        create_date: this.isCreate ? moment().toDate() : this.selectedTypeOfCar.create_date
      };
      if (this.isCreate) {
        this.settingStoreFacade.addTypeOfCar(request);
      } else {
        this.settingStoreFacade.updateTypeOfCar(request);
      }
    }
  }

}
