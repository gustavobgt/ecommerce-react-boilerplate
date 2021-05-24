import React from 'react';
import themeReducer from 'state/reducers/theme.reducer';
import { ThemeAction } from 'state/actions/theme.actions';

interface ContextType {
    state: {
        currentTheme: string;
    };
    dispatch: ({ type }: ThemeAction) => void;
}

const initialState = {
    currentTheme: 'light',
};

export const AppContext = React.createContext({} as ContextType);

const AppProvider: React.FC = ({ children }) => {
    const [currentTheme, dispatch] = React.useReducer(
        themeReducer,
        initialState.currentTheme
    );

    return (
        <AppContext.Provider value={{ state: { currentTheme }, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
