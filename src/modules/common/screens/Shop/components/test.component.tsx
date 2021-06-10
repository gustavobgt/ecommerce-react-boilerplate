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

const Text = styled.span`
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.caption};
    margin-bottom: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.black};
`;

interface Props {
    data: any[];
    error: any;
    loading: boolean;
}

export const TestComponent: React.FC<Props> = ({ data, error, loading }) => {
    return (
        <Container>
            {data?.map(({ _id, title }) => {
                return <Text key={_id}>{title}</Text>;
            })}
            {error && <Text>ERROR!</Text>}
            {loading && <Text>Loading...</Text>}
        </Container>
    );
};
