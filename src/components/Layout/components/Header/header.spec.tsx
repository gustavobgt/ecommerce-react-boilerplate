import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor, userEvent } from 'tests';
import { getTheme } from 'styles';
import { AppStateProvider } from 'state';

import { HeaderComponent as Header } from './header.component';

const sideDrawerOptions = [
    'sidedrawer-my-orders-item',
    'sidedrawer-signin-signout-item',
    'sidedrawer-my-favorities-item',
];
const theme = getTheme('light');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const renderComponent = (child: any) => {
    return render(
        <AppStateProvider>
            <Router>
                <ThemeProvider theme={theme}>{child}</ThemeProvider>
            </Router>
        </AppStateProvider>
    );
};

describe('HeaderComponent', () => {
    it('SideDrawerComponent should start closed', async () => {
        const { queryByTestId } = renderComponent(<Header />);

        expect.assertions(4);

        await waitFor(() => {
            expect(queryByTestId('sidedrawer-title')).not.toBeInTheDocument();

            sideDrawerOptions.forEach((option) => {
                expect(queryByTestId(option)).not.toBeInTheDocument();
            });
        });
    });

    it('Should open SideDrawerComponent when pressed', async () => {
        const { getByTestId } = renderComponent(<Header />);

        expect.assertions(4);

        await waitFor(() => {
            const button = getByTestId('header-menu-my-account-item');
            userEvent.click(button);

            expect(getByTestId('sidedrawer-title')).toBeInTheDocument();

            sideDrawerOptions.forEach((option) => {
                expect(getByTestId(option)).toBeInTheDocument();
            });
        });
    });
});
