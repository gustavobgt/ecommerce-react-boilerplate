import { ActionType } from 'state/actions/theme.actions';
import { Action } from 'state/actions';
import { ThemeState } from 'state/states/theme.state';

const initialState = {
    theme: 'light',
};

const reducer = (
    state: ThemeState = initialState,
    action: Action
): ThemeState => {
    switch (action.type) {
        case ActionType.CHANGE_TO_LIGHT_THEME:
            return { theme: 'light' };
        case ActionType.CHANGE_TO_DARK_THEME:
            return { theme: 'dark' };
        default:
            return state;
    }
};

export default reducer;
