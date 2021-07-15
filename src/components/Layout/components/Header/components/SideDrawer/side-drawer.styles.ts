import styled from 'styled-components';
import { Drawer as AntdDrawer, Button as AntdButton } from 'antd';

export const Drawer = styled(AntdDrawer)`
    &&
        .ant-drawer-content-wrapper
        .ant-drawer-content
        .ant-drawer-wrapper-body
        .ant-drawer-body {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-gap: ${(props) => props.theme.space[3]};
    }
`;

export const Title = styled(AntdButton)`
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    padding: ${(props) => props.theme.space[0]};
`;

export const Item = styled(AntdButton)`
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
    padding: ${(props) => props.theme.space[0]};

    :hover {
        border-bottom: 1px solid ${(props) => props.theme.colors.ui.primary};
    }
`;
