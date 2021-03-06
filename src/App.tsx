import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { getTheme } from 'styles';
import RouterConfig from 'navigation/router.config';
import { useTheme } from 'hooks/useTheme';

const App: React.FC = () => {
    const { theme } = useTheme();

    const currentTheme = React.useMemo(() => {
        return getTheme(theme);
    }, [theme]);

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyle />
                <RouterConfig />
            </ThemeProvider>
        </React.Suspense>
    );
};

export default App;
