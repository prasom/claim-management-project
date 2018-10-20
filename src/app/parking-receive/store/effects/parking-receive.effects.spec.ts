import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ParkingReceiveEffects } from './parking-receive.effects';

describe('ParkingReceiveEffects', () => {
  let actions$: Observable<any>;
  let effects: ParkingReceiveEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ParkingReceiveEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ParkingReceiveEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
