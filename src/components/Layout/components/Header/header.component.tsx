import React, { FC, useState } from 'react';
import { Badge } from 'antd';
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    RightOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { useTheme } from 'hooks/useTheme';

import { SideDrawer } from './components';
import { Header, Logo, Switch, Menu } from './header.styles';

const { Item } = Menu;

export const HeaderComponent: FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const { handleThemeChange } = useTheme();

    const handleDrawerOpen = (): void => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = (): void => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <Header>
                <Logo />

                <Switch
                    checkedChildren="light"
                    unCheckedChildren="dark"
                    defaultChecked
                    onClick={handleThemeChange}
                />

                <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                    <Item
                        data-testid="header-menu-my-account-item"
                        key="my-account"
                        icon={<UserOutlined />}
                        onClick={handleDrawerOpen}>
                        Minha Conta <RightOutlined />
                    </Item>

                    <Item key="cart" icon={<ShoppingCartOutlined />}>
                        <Link to="/cart">
                            <Badge count={2} offset={[10, 0]}>
                                Carrinho
                            </Badge>
                        </Link>
                    </Item>
                </Menu>
            </Header>

            <SideDrawer
                isDrawerOpen={isDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
        </>
    );
};
