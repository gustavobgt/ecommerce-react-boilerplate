import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer: AntdFooter } = Layout;

export const Footer = styled(AntdFooter)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    transition: 0.3s ease;
    color: ${(props) => props.theme.colors.ui.black};
    text-align: center;
`;
