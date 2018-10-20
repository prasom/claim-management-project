import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'setting-main',
  templateUrl: './setting-main.component.html',
  styleUrls: ['./setting-main.component.css']
})
export class SettingMainComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
