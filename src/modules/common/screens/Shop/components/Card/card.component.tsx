import React from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, Tooltip, Rate } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import noImage from 'assets/images/NO-IMAGE.png';
import { Product } from 'modules/common/screens/Shop/shop.models';

import {
    ProductCard,
    ProductImage,
    Description,
    OldPrice,
    Price,
} from './card.styles';

interface Props {
    product: Product | null;
    loading: boolean;
}

export const Card: React.FC<Props> = ({ product, loading }) => {
    console.log('product', product);
    return (
        <ProductCard
            cover={
                loading ? (
                    <Skeleton.Image />
                ) : (
                    <ProductImage
                        alt={product?.title}
                        src={
                            product?.images && product?.images?.length
                                ? product?.images[0]?.url
                                : noImage
                        }
                    />
                )
            }
            hoverable
            bordered
            actions={[
                loading ? (
                    <Skeleton.Button active />
                ) : (
                    <Tooltip title="Clique para ver o produto!">
                        <Link to={`/product/${product?.slug}`}>
                            <EyeOutlined /> <br /> Ver Produto
                        </Link>
                    </Tooltip>
                ),
                loading ? (
                    <Skeleton.Button active />
                ) : (
                    <Tooltip title="Clique para adicionar!">
                        <ShoppingCartOutlined /> <br /> Comprar
                    </Tooltip>
                ),
            ]}>
            <Skeleton loading={loading} active>
                <ProductCard.Meta
                    title={product?.title}
                    description={
                        <Description>
                            <Rate allowHalf defaultValue={2.5} />
                            <OldPrice>
                                DE <del>R$ 30,00</del> POR
                            </OldPrice>
                            <Price>R$ {product?.price},00</Price>
                        </Description>
                    }
                />
            </Skeleton>
        </ProductCard>
    );
};
