import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'navigation';
import { GET_PRODUCTS_BY_COUNT } from 'services';
import { useFetch } from 'hooks';
import ShopView from './shop.view';

export const ShopContainer: React.FC = () => {
    const [{ data, error, loading }, doFetch] = useFetch(
        GET_PRODUCTS_BY_COUNT(12)
    );
    React.useEffect(() => {
        doFetch();
    }, [doFetch]);
    return (
        <>
            <Link to={PATHS.HOME}>HOME</Link>
            <ShopView data={data} error={error} loading={loading} />
        </>
    );
};
