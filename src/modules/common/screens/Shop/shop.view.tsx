/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { Card } from './components';
import { Product } from './shop.models';

interface Props {
    data: Product[];
    error: string | null;
    loading: boolean;
}

const ShopView: React.FC<Props> = ({ data, error, loading }) => {
    const totalLoadingCards = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
    ];
    return (
        <div>
            <h1>ShopView</h1>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {loading
                    ? totalLoadingCards?.map((value) => (
                          <Card product={null} key={value} loading={loading} />
                      ))
                    : data?.map((product) => (
                          <Card
                              key={product._id}
                              product={product}
                              loading={loading}
                          />
                      ))}
                {error && <p>ERROR!</p>}
            </div>
        </div>
    );
};

export default ShopView;
