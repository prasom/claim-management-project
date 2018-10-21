import { Action } from '@ngrx/store';
import { ISettingModel } from '../../models/setting.model';

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
  constructor(public payload: { settings: ISettingModel[] }) { }
}

export class LoadSettingsFail implements Action {
  readonly type = SettingActionTypes.LoadSettingsFail;
  constructor(public payload: { errorMessage: string }) { }
}

export class UpdateLogo implements Action {
  readonly type = SettingActionTypes.UpdateLogo;
  constructor(public payload: { logo: ISettingModel }) { }
}

export class UpdateLogoSuccess implements Action {
  readonly type = SettingActionTypes.UpdateLogoSuccess;
  constructor(public payload: { logo: ISettingModel }) { }
}

export type SettingActions = LoadSettings
  | LoadSettingsSuccess
  | LoadSettingsFail
  | UpdateLogo
  | UpdateLogoSuccess;
