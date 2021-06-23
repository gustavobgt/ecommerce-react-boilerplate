interface Rating {
    postedBy: string;
    star: number;
    _id: string;
}

interface ProductImage {
    // eslint-disable-next-line camelcase
    public_id: string;
    url: string;
}

interface Subcategory {
    createdAt: string;
    name: string;
    parent: string;
    slug: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

export interface Product {
    brand: string;
    category: {
        _id: string;
        name: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
    };
    color: string;
    createdAt: string;
    description: string;
    images: ProductImage[];
    price: number;
    quantity: number;
    ratings: Rating[];
    shipping: string;
    slug: string;
    sold: number;
    subs: Subcategory[];
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}
