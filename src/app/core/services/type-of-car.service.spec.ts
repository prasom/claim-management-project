import { TestBed, inject } from '@angular/core/testing';

import { TypeOfCarService } from './type-of-car.service';

describe('TypeOfCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeOfCarService]
    });
  });

  it('should be created', inject([TypeOfCarService], (service: TypeOfCarService) => {
    expect(service).toBeTruthy();
  }));
});
