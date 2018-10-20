import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bill-main',
  templateUrl: './bill-main.component.html',
  styleUrls: ['./bill-main.component.css']
})
export class BillMainComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
