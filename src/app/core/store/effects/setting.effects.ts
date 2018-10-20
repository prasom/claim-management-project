import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SettingActionTypes, LoadSettingsSuccess, LoadSettingsFail, UpdateLogo, UpdateLogoSuccess, LoadSettings } from '../actions/setting.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { SettingService } from '../../../core/services/setting.service';
import { of } from 'rxjs';

@Injectable()
export class SettingEffects {

  @Effect()
  loadSettings$ = this.actions$.pipe(
    ofType(SettingActionTypes.LoadSettings),
    switchMap(() => this.settingService.find().pipe(
      map(data => {
        return new LoadSettingsSuccess({ settings: data });
      }),
      catchError(error => of(new LoadSettingsFail({ errorMessage: error })))
    ))
  );

  @Effect()
  updateLogo$ = this.actions$.pipe(
    ofType<UpdateLogo>(SettingActionTypes.UpdateLogo),
    map(action => action.payload.logo),
    switchMap((payload) => this.settingService.updateLogo(payload).pipe(
      map(data => {
        return new UpdateLogoSuccess({ logo: data });
      }),
      catchError(error => of(new LoadSettingsFail({ errorMessage: error })))
    ))
  );

  @Effect({ dispatch: false })
  updateLogoSuccess$ = this.actions$.pipe(
    ofType(SettingActionTypes.UpdateLogoSuccess),
    tap(() => new LoadSettings())
  );

  constructor(
    private actions$: Actions,
    private settingService: SettingService
  ) { }
}
