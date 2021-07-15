import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor, userEvent } from 'tests';
import { getTheme } from 'styles';
import { AppStateProvider } from 'state';

import { SideDrawerComponent as SideDrawer } from './side-drawer.component';

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

describe('SideDrawerComponent', () => {
    it('should close SideDrawer when an item is pressed', async () => {
        const handleDrawerClose = jest.fn();
        const { getByTestId } = renderComponent(
            <SideDrawer isDrawerOpen handleDrawerClose={handleDrawerClose} />
        );

        expect.assertions(1);

        await waitFor(() => {
            const item1 = getByTestId('sidedrawer-my-orders-item');
            userEvent.click(item1);

            expect(handleDrawerClose).toHaveBeenCalledTimes(1);
        });
    });
});
