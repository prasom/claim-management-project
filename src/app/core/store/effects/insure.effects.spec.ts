import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InsureEffects } from './insure.effects';

describe('InsureEffects', () => {
  let actions$: Observable<any>;
  let effects: InsureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InsureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(InsureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
