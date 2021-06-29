import React from 'react';
import { RouterConfig } from 'navigation';
import { AntdContent, AntdSearch } from './content.styles';

export const ContentComponent: React.FC = () => {
    const onSearch = (value: string): void => console.log(value);
    return (
        <AntdContent>
            <AntdSearch
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                size="large"
            />
            <RouterConfig />
        </AntdContent>
    );
};
