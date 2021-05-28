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
`;

const Text = styled.h3`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h3};
    margin-bottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.black};
`;

const Button = styled.button`
    font-size: ${(props) => props.theme.fontSizes.button};
    background: ${(props) => props.theme.colors.bg.secondary};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.white};
    border-radius: 5px;
`;

export const TestComponent: React.FC = () => {
    const { theme, handleThemeChange } = useTheme();
    return (
        <Container>
            <Text>ECOMMERCE BOILERPLATE</Text>
            <Text>{theme}</Text>
            <Button onClick={handleThemeChange}>SWITCH THEME</Button>
        </Container>
    );
};
