import React from 'react';
import { RouterConfig } from 'navigation';

import { Content, Search } from './content.styles';

export const ContentComponent: React.FC = () => {
    const onSearch = (value: string): void => console.log(value);
    return (
        <Content>
            <Search
                placeholder="Estou procurando por..."
                onSearch={onSearch}
                enterButton
                size="large"
            />
            <RouterConfig />
        </Content>
    );
};
