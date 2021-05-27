export enum ActionType {
    CHANGE_TO_LIGHT_THEME = 'change_to_light_theme',
    CHANGE_TO_DARK_THEME = 'change_to_dark_theme',
}

export interface ChangeToLightThemeAction {
    type: ActionType.CHANGE_TO_LIGHT_THEME;
}

export interface ChangeToDarkThemeAction {
    type: ActionType.CHANGE_TO_DARK_THEME;
}
