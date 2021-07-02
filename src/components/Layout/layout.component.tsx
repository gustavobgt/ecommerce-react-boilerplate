import React from 'react';

import { Layout } from './layout.styles';
import { Header, Content, Footer } from './components';

export const LayoutComponent: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content />
            <Footer />
        </Layout>
    );
};
