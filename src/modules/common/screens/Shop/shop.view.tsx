import React from 'react';
import { TestComponent } from './components/test.component';

interface Props {
    data: any[];
    error: any;
    loading: boolean;
}

const ShopView: React.FC<Props> = ({ data, error, loading }) => {
    return (
        <div>
            <h1>ShopView</h1>
            <TestComponent data={data} error={error} loading={loading} />
        </div>
    );
};

export default ShopView;
