import * as fromFeature from '../reducers';
import * as fromSetting from '../reducers/setting.reducer';
import { createSelector } from '@ngrx/store';


export const selectSettingState = (state: fromFeature.CoreState) => state.settingState;


export const getSettingItems = createSelector(
    selectSettingState,
    fromSetting.getSettingItems
);

export const getSettingLoading = createSelector(
    selectSettingState,
    fromSetting.getSettingLoading
);

export const getSettingLoaded = createSelector(
    selectSettingState,
    fromSetting.getSettingLoaded
);


export const getLogoSetting = createSelector(
    getSettingItems,
    (settings) => {
        return settings.filter(x => x.key === 'LOGO')[0];
    }
);


