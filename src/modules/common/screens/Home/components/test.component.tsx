import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'hooks/useTheme';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.bg.primary};
    transition: 0.3s ease;
`;

const Text = styled.h3`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h3};
    margin-bottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.black};
`;

export const TestComponent: React.FC = () => {
    const { theme } = useTheme();
    return (
        <Container>
            <Text>ECOMMERCE BOILERPLATE</Text>
            <Text>{theme}</Text>
        </Container>
    );
};
