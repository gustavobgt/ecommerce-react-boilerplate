import React, { FC, useState } from 'react';
import { Drawer, Badge } from 'antd';
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    RightOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

import { Header, Logo, Menu } from './header.styles';

const { Item } = Menu;

export const HeaderComponent: FC = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = (): void => {
        setVisible(true);
    };

    const onClose = (): void => {
        setVisible(false);
    };
    return (
        <>
            <Header>
                <Logo />

                <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                    <Item
                        key="my-account"
                        icon={<UserOutlined />}
                        onClick={showDrawer}>
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
            <Drawer
                title="Minha conta"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
