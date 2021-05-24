import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { getTheme } from 'styles';
import RouterConfig from 'navigation/router.config';
import { useTheme } from 'hooks/useTheme';

const App: React.FC = () => {
    const { currentTheme } = useTheme();

    const theme = React.useMemo(() => {
        return getTheme(currentTheme);
    }, [currentTheme]);

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
