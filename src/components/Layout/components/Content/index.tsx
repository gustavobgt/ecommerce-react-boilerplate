import React from 'react';
import { RouterConfig } from 'navigation';
import { Container } from './styles';

export const Content: React.FC = () => {
    return (
        <Container>
            <RouterConfig />
        </Container>
    );
};
