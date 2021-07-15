import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.h3};
    margin-bottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.black};
`;

export const NotFound: React.FC = () => <Text>Page Not found</Text>;
