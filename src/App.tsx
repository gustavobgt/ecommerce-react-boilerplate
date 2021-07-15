import React, { FC, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { getTheme } from 'styles';
import { Layout } from 'components';
import { useTheme } from 'hooks/useTheme';

const App: FC = () => {
    const { theme } = useTheme();

    const currentTheme = React.useMemo(() => {
        return getTheme(theme);
    }, [theme]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyle />
                <Layout />
            </ThemeProvider>
        </Suspense>
    );
};

export default App;
