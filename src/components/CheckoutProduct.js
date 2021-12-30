import React from 'react';
import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from "../slices/cartSlice";

export default function CheckoutProduct({ id, title, price, description, category, image, rating, hasSupreme }) {
    const dispatch = useDispatch();

    const increaseQuantity = () => {
        const product = { id, title, price, description, category, image, rating, hasSupreme };
        dispatch(addToCart(product));
    };

    const removeItemFromCart = () => {
        dispatch(removeFromCart({ id }));
    };
    return (
        <div className='grid grid-col-5'>
            <Image
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />
            <div className='col-span-3 mx-5'>
                <p>{title} </p>
                <div className='flex'>
                    {Array(Math.round(rating)).fill().map((_, index) => (
                        <StarIcon key={index} className="h-5 text-yellow-500" />
                    ))
                    }
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} />
                {hasSupreme && (
                    <div className='flex items-center space-x-2'>
                        <img
                            loading="lazy"
                            className='w-12'
                            src='https://links.papareact.com/fdw'
                        />
                        <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button onClick={increaseQuantity} className="button">Increment Quantity</button>
                <button onClick={removeItemFromCart} className="button">Remove From Cart</button>
            </div>
        </div>
    );
}
