import React from 'react';
import { AppContext } from 'state/context';
import { ThemeAction } from 'state/actions/theme.actions';

interface Hook {
    currentTheme: string;
    dispatch: ({ type }: ThemeAction) => void;
}

export const useTheme = (): Hook => {
    const { state, dispatch } = React.useContext(AppContext);
    const { currentTheme } = state;
    return { currentTheme, dispatch };
};
