import React from 'react';
import { useTheme } from 'hooks/useTheme';

const Home: React.FC = () => {
    const { theme, handleThemeChange } = useTheme();

    return (
        <div>
            <h1>HOME</h1>
            <p>
                CURRENT THEME <strong>{theme}</strong>{' '}
            </p>
            <button type="button" onClick={handleThemeChange}>
                CHANGE THEME
            </button>
        </div>
    );
};

export default Home;
