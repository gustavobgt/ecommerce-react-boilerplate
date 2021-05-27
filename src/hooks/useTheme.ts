import { useAppState } from 'state';
import { ActionType } from 'state/actions/theme.actions';

interface Hook {
    theme: string;
    handleThemeChange: () => void;
}

export const useTheme = (): Hook => {
    const { state, dispatch } = useAppState();
    const { theme } = state;

    const handleThemeChange = (): void => {
        const actionType =
            theme === 'light'
                ? ActionType.CHANGE_TO_DARK_THEME
                : ActionType.CHANGE_TO_LIGHT_THEME;

        dispatch({
            type: actionType,
        });
    };

    return { theme, handleThemeChange };
};
