import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BillEffects } from './bill.effects';

describe('BillEffects', () => {
  let actions$: Observable<any>;
  let effects: BillEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BillEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BillEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
