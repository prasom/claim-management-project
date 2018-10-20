import { TestBed, inject } from '@angular/core/testing';

import { InsureService } from './insure.service';

describe('InsureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsureService]
    });
  });

  it('should be created', inject([InsureService], (service: InsureService) => {
    expect(service).toBeTruthy();
  }));
});
