import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TypeOfCarEffects } from './type-of-car.effects';

describe('TypeOfCarEffects', () => {
  let actions$: Observable<any>;
  let effects: TypeOfCarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TypeOfCarEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TypeOfCarEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
