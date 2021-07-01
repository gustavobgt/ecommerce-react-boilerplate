import styled from 'styled-components';
import { Layout, Input } from 'antd';

const { Content: AntdContent } = Layout;
const { Search: AntdSearch } = Input;

export const Content = styled(AntdContent)`
    padding: ${(props) => props.theme.space[4]};
`;

export const Search = styled(AntdSearch)`
    margin-bottom: ${(props) => props.theme.space[4]};
`;
