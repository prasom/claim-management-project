import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'parking-receive-main-page',
  templateUrl: './parking-receive-main-page.component.html',
  styleUrls: ['./parking-receive-main-page.component.css']
})
export class ParkingReceiveMainPageComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
