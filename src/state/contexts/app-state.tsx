import React from 'react';
import { GlobalState, initialState, appReducers, Action } from 'state';

interface ContextType {
    state: GlobalState;
    dispatch: React.Dispatch<Action>;
}

const AppContext = React.createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
});

export const AppStateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(appReducers, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppState = (): ContextType => {
    return React.useContext(AppContext);
};
