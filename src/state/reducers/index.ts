import { Action } from 'state/actions';
import themeReducer from 'state/reducers/theme.reducer';

export interface GlobalState {
    theme: string;
}

const initialState: GlobalState = {
    theme: 'light',
};

const combineReducers = (reducers: any) => {
    return (state: any, action: Action) => {
        return Object.keys(reducers).reduce((acc, prop) => {
            return {
                ...acc,
                ...reducers[prop]({ [prop]: acc[prop] }, action),
            };
        }, state);
    };
};

const appReducers = combineReducers({
    theme: themeReducer,
});

export { initialState, appReducers };
