import styled from 'styled-components';
import { Card } from 'antd';

export const ProductCard = styled(Card)`
    flex: 1 1 260px;
    max-width: 260px;
    margin: ${(props) => props.theme.space[3]};

    && > .ant-card-cover {
        width: 260px;
        height: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    && > .ant-card-body {
        padding: ${(props) => props.theme.space[3]};
    }
`;

export const ProductImage = styled.img``;

export const Title = styled.h6`
    font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const OldPrice = styled.span`
    font-size: ${(props) => props.theme.fontSizes.button};
`;

export const Price = styled.h4`
    font-size: ${(props) => props.theme.fontSizes.h4};
`;
