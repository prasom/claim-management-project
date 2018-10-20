import { TestBed, inject } from '@angular/core/testing';

import { ParkingHistoryService } from './parking-history.service';

describe('ParkingHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingHistoryService]
    });
  });

  it('should be created', inject([ParkingHistoryService], (service: ParkingHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
