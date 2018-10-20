import { Action } from '@ngrx/store';

export enum SettingActionTypes {
  LoadSettings = '[Setting] Load Settings',
  LoadSettingsSuccess = '[Setting] Load Settings Success',
  LoadSettingsFail = '[Setting] Load Settings Fail',

  UpdateLogo = '[Setting] Update Logo',
  UpdateLogoSuccess = '[Setting] Update Logo Success',
}

export class LoadSettings implements Action {
  readonly type = SettingActionTypes.LoadSettings;
}

export class LoadSettingsSuccess implements Action {
  readonly type = SettingActionTypes.LoadSettingsSuccess;
  constructor(public payload: { settings: any }) { }
}

export class LoadSettingsFail implements Action {
  readonly type = SettingActionTypes.LoadSettingsFail;
  constructor(public payload: { errorMessage: string }) { }
}

export class UpdateLogo implements Action {
  readonly type = SettingActionTypes.UpdateLogo;
  constructor(public payload: { logo: string }) { }
}

export class UpdateLogoSuccess implements Action {
  readonly type = SettingActionTypes.UpdateLogoSuccess;
  constructor(public payload: { logo: string }) { }
}

export type SettingActions = LoadSettings
  | LoadSettingsSuccess
  | LoadSettingsFail
  | UpdateLogo
  | UpdateLogoSuccess;
