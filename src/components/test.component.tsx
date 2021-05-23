import React from 'react';
import styled from 'styled-components';

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

interface Props {
    handleSwitchTheme: () => void;
}

export const TestComponent: React.FC<Props> = ({ handleSwitchTheme }) => (
    <Container>
        <Text>ECOMMERCE BOILERPLATE</Text>
        <Button onClick={handleSwitchTheme}>SWITCH THEME</Button>
    </Container>
);
