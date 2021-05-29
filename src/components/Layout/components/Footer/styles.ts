import styled from 'styled-components';

export const Container = styled.div`
    grid-area: FT;
    color: ${(props) => props.theme.colors.ui.primary};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
