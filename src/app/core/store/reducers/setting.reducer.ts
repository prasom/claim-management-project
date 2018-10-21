import { Action } from '@ngrx/store';
import { SettingActions, SettingActionTypes } from '../actions/setting.actions';
import { IBaseState } from '../../../core/models/base-state.model';
import { ISettingModel } from '../../../core/models/setting.model';

export interface State extends IBaseState {
  settings: ISettingModel[];
}

export const initialState: State = {
  settings: [],
  loading: false,
  loaded: false,
  error: false,
  errorMessage: ''
};

export function reducer(state = initialState, action: SettingActions): State {
  switch (action.type) {

    case SettingActionTypes.LoadSettings: {
      return { ...state, loading: true };
    }
    case SettingActionTypes.LoadSettingsSuccess: {
      return { ...state, loading: false, loaded: true, settings: action.payload.settings };
    }
    case SettingActionTypes.LoadSettingsFail: {
      return { ...state, loading: false, error: true, errorMessage: action.payload.errorMessage };
    }

    case SettingActionTypes.UpdateLogo: {
      return { ...state, loading: true };
    }
    case SettingActionTypes.UpdateLogoSuccess: {
      return {
        ...state,
        loading: false,
        settings : [action.payload.logo],
      };
    }
    default:
      return state;
  }
}


export const getSettingItems = (state: State) => state.settings;
export const getSettingLoading = (state: State) => state.loading;
export const getSettingLoaded = (state: State) => state.loaded;
