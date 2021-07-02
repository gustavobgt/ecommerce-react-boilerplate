import styled from 'styled-components';
import { Menu as AntdMenu, Layout, Switch as AntdSwitch } from 'antd';

const { Header: AntdHeader } = Layout;

export const Header = styled(AntdHeader)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    transition: 0.3s ease;
`;

export const Logo = styled.div`
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: #000000;
`;

export const Switch = styled(AntdSwitch)`
    float: left;
    margin: 20px 24px 16px 0;
`;

export const Menu = styled(AntdMenu)`
    justify-content: flex-end;
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
