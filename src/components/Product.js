import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

export default function Product({ id, title, price, description, category, image, rating }) {
    const hasSupreme = Math.random() < 0.5;
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
            <button className='mt-auto button'>Add to Cart</button>
        </div>
    );
}
