import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TypeOfInsureEffects } from './type-of-insure.effects';

describe('TypeOfInsureEffects', () => {
  let actions$: Observable<any>;
  let effects: TypeOfInsureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TypeOfInsureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TypeOfInsureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
