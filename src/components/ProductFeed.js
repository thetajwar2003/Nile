import React from 'react';
import Product from './Product';

export default function ProductFeed({ products }) {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 max-auto'>

            {products.slice(0, 4).map(({ id, title, price, description, category, image, rating }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating.rate}
                />
            ))}
            <img className="md:col-span-full w-full px-5" src="https://links.papareact.com/dyz" />

            <div className='md:col-span-2'>
                {products.slice(4, 5).map(({ id, title, price, description, category, image, rating }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating.rate}
                    />
                ))}
            </div>
            {products.slice(5, products.length).map(({ id, title, price, description, category, image, rating }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    rating={rating.rate}
                />
            ))}
        </div>
    );
}
