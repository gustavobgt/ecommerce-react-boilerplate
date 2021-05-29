import React from 'react';

import { Grid } from './styles';

import { Header, Content, Footer } from './components';

export const Layout: React.FC = () => {
    return (
        <Grid>
            <Header />
            <Content />
            <Footer />
        </Grid>
    );
};
