import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { getTheme } from 'styles';
import { TestComponent } from 'components';

const App: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = React.useState('light');

    const theme = React.useMemo(() => {
        return getTheme(selectedTheme);
    }, [selectedTheme]);

    const handleSwitchTheme = (): void => {
        setSelectedTheme((prevState) =>
            prevState === 'light' ? 'dark' : 'light'
        );
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <TestComponent handleSwitchTheme={handleSwitchTheme} />
            </ThemeProvider>
        </>
    );
};

export default App;
