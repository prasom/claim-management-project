import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DbEffects } from './db.effects';

describe('CoreEffects', () => {
  let actions$: Observable<any>;
  let effects: DbEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DbEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DbEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
