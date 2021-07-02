import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Tooltip } from 'antd';
import {
    ProfileOutlined,
    UserAddOutlined,
    HeartOutlined,
    LeftOutlined,
} from '@ant-design/icons';

import { Props } from './side-drawer.models';
import { Drawer, Title, Item } from './side-drawer.styles';

export const SideDrawerComponent: FC<Props> = ({
    isDrawerOpen,
    handleDrawerClose,
}) => {
    const history = useHistory();

    const handleNavigateTo = (path: string): void => {
        handleDrawerClose();
        history.push(path);
    };

    return (
        <Drawer
            title={
                <Tooltip title="Fechar Menu" placement="left">
                    <Title
                        type="text"
                        icon={<LeftOutlined />}
                        onClick={handleDrawerClose}>
                        Minha Conta
                    </Title>
                </Tooltip>
            }
            placement="right"
            closable={false}
            onClose={handleDrawerClose}
            visible={isDrawerOpen}>
            <Item
                type="text"
                icon={<ProfileOutlined />}
                onClick={() => handleNavigateTo('/user/orders')}>
                Meus Pedidos
            </Item>
            <Item
                type="text"
                icon={<UserAddOutlined />}
                onClick={() => handleNavigateTo('/login')}>
                Entre ou Cadastre-se
            </Item>
            <Item
                type="text"
                icon={<HeartOutlined />}
                onClick={() => handleNavigateTo('/user/favorites')}>
                Meus Favoritos
            </Item>
        </Drawer>
    );
};