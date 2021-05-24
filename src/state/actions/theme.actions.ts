import { ActionType } from 'state/actions-types';

interface ChangeToLightThemeAction {
    type: ActionType.CHANGE_TO_LIGHT_THEME;
}

interface ChangeToDarkThemeAction {
    type: ActionType.CHANGE_TO_DARK_THEME;
}

export type ThemeAction = ChangeToLightThemeAction | ChangeToDarkThemeAction;
