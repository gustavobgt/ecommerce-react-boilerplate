import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { getTheme } from 'styles';
import RouterConfig from 'navigation/router.config';

const App: React.FC = () => {
    // const [selectedTheme, setSelectedTheme] = React.useState('light');

    /*
    const theme = React.useMemo(() => {
        return getTheme(selectedTheme);
    }, [selectedTheme]);

    const handleSwitchTheme = (): void => {
        setSelectedTheme((prevState) =>
            prevState === 'light' ? 'dark' : 'light'
        );
    }; */

    const theme = getTheme('light');

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RouterConfig />
            </ThemeProvider>
        </React.Suspense>
    );
};

export default App;
