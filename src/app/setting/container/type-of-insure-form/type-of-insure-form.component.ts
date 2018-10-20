import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingStoreFacade } from '../../store/setting-store.facade';
import { IInsure } from '../../../core/models/insure.model';
import { Validators, FormControl } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'type-of-insure-form',
  templateUrl: './type-of-insure-form.component.html',
  styleUrls: ['./type-of-insure-form.component.css']
})
export class TypeOfInsureFormComponent implements OnInit {

  selectedInsure: IInsure;
  insureTypeName = new FormControl(null, [Validators.required]);
  isEdit: boolean = false;
  isCreate: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private settingStoreFacade: SettingStoreFacade
  ) { }

  ngOnInit() {
    this.settingStoreFacade.loadTypeOfInsuresById(this.route.snapshot.paramMap.get('id'));
    if (this.route.snapshot.paramMap.get('id') === '0') {
      this.isCreate = true;
    }
    this.settingStoreFacade.selectedTypeOfInsure$.subscribe(insure => {
      if (insure) {
        this.selectedInsure = insure;
        this.insureTypeName.setValue(insure.name);
      }
    });
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  cancel() {
    this.router.navigate(['/setting/typeofinsure']);
  }

  submitInsure() {
    if (this.insureTypeName.valid) {
      const request: IInsure = {
        insure_type_id: this.selectedInsure.insure_type_id,
        name: this.isCreate ? this.insureTypeName.value : this.selectedInsure.name,
        delete_flag: false,
        create_date: this.isCreate ? moment().toDate() : this.selectedInsure.create_date
      };
      if (this.isCreate) {
        this.settingStoreFacade.addTypeOfInsure(request);
      } else {
        this.settingStoreFacade.updateTypeOfInsure(request);
      }
    }
  }

}
