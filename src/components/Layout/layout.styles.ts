import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';

export const Layout = styled(AntdLayout)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    transition: 0.3s ease;
`;
