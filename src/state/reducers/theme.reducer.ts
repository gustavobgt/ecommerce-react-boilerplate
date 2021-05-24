import { ActionType } from 'state/actions-types';
import { ThemeAction } from 'state/actions/theme.actions';

const reducer = (state: string, action: ThemeAction): string => {
    switch (action.type) {
        case ActionType.CHANGE_TO_LIGHT_THEME:
            return 'light';
        case ActionType.CHANGE_TO_DARK_THEME:
            return 'dark';
        default:
            return state;
    }
};

export default reducer;
