import React from 'react';
import { Layout, Menu } from 'antd';

import { Logo } from './header.styles';

const { Header } = Layout;
const { Item } = Menu;

export const HeaderComponent: React.FC = () => {
    return (
        <Header>
            <Logo />

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                {new Array(15).fill(null).map((_, index) => {
                    const key = index + 1;
                    return <Item key={key}>{`nav ${key}`}</Item>;
                })}
            </Menu>
        </Header>
    );
};
