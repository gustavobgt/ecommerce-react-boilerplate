import styled from 'styled-components';
import { Layout, Input } from 'antd';

const { Content } = Layout;
const { Search } = Input;

export const AntdContent = styled(Content)`
    padding: ${(props) => props.theme.space[4]};
`;

export const AntdSearch = styled(Search)`
    margin-bottom: ${(props) => props.theme.space[4]};
`;
