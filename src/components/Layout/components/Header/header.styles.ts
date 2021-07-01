import styled from 'styled-components';
import { Menu as AntdMenu, Layout } from 'antd';

const { Header: AntdHeader } = Layout;

export const Header = styled(AntdHeader)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Logo = styled.div`
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: #000000;
`;

export const Menu = styled(AntdMenu)`
    justify-content: flex-end;
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
