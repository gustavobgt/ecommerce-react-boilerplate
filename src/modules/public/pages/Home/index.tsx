import React from 'react';
import { useTheme } from 'hooks/useTheme';
import { ActionType } from 'state/actions-types';

const Home: React.FC = () => {
    const { currentTheme, dispatch } = useTheme();
    const actionType =
        currentTheme === 'light'
            ? ActionType.CHANGE_TO_DARK_THEME
            : ActionType.CHANGE_TO_LIGHT_THEME;

    return (
        <div>
            <h1>HOME</h1>
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: actionType,
                    })
                }>
                CHANGE THEME
            </button>
        </div>
    );
};

export default Home;
