import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ParkingReceiveStoreFacade } from '../../store/parking-receive-store.facade';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ParkingHistoryViewModel, IParkingHistoryRequestModel } from '../../../core/models/parking-receive.model';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'parking-receive-detail-page',
  templateUrl: './parking-receive-detail-page.component.html',
  styleUrls: ['./parking-receive-detail-page.component.css']
})
export class ParkingReceiveDetailPageComponent implements OnInit {

  selectedParkingHistoryItem$: Observable<ParkingHistoryViewModel>;
  historyId: number;
  isParking = new FormControl(false, []);


  constructor(
    private parkingStoreFaced: ParkingReceiveStoreFacade,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.parkingStoreFaced.loadParkingHistoryById(this.route.snapshot.paramMap.get('id'));
    this.selectedParkingHistoryItem$ = this.parkingStoreFaced.selectedParkingHistoryItem$;
    this.parkingStoreFaced.selectedParkingHistoryItem$.subscribe(data => {
      if (data) {
        this.historyId = data.id_parking_history;
        this.isParking.setValue(data.is_parking);
      }
    });
  }

  updateParkingHistory() {
    console.log(this.isParking.value);
    const request: IParkingHistoryRequestModel = {
      is_parking: this.isParking.value,
      claim_info_id: this.route.snapshot.paramMap.get('id'),
      create_date: moment().toDate()
    };
    if (this.historyId) {
      this.parkingStoreFaced.updateParkingHistory(request);
    } else {
      this.parkingStoreFaced.addParkingHistory(request);
    }
  }

  cancel() {
    this.router.navigate(['parking']);
  }

}
