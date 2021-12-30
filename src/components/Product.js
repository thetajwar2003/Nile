import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToCart } from "../slices/cartSlice";

export default function Product({ id, title, price, description, category, image, rating, quantity }) {
    const hasSupreme = Math.random() < 0.5;
    const dispatch = useDispatch();
    const addItemToCart = () => {
        const product = { id, title, price, description, category, image, rating, hasSupreme, quantity };

        // sending the product as an action to the Redux store -> the cart slice
        dispatch(addToCart(product));
    };
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <Image src={image} height={200} width={200} objectFit='contain' />

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(Math.round(rating)).fill().map((_, i) => (
                    <StarIcon className='h-5 text-yellow-500' />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} />
            </div>

            {hasSupreme && (
                <div className='flex item-center space-x-3 -mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" />
                    <p className='text-xs text-gray-500'>Free Next-Day Delivery</p>
                </div>
            )}
            <button onClick={addItemToCart} className='mt-auto button'>Add to Cart</button>
        </div>
    );
}
