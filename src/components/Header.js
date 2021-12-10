import React from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

export default function Header() {
    return (
        <header>
            {/* top header */}
            <div className="flex items-center bg-nile_blue p-1 flex-grow py-2">
                <div className="mt-2 px-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://drive.google.com/uc?export=view&id=1oMSSRbqtScoVJwGztfiLoUUV26bP1Bo6"
                        width={95} // 265
                        height={50} // 140
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* Search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-600">
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* cart and profile */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className='link'>
                        <p>Hello User</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <p>Return</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='relative link flex items-center'>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center rounded-full text-black font-bold'>0</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom header */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-nile_blue-light text-white text-sm'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' /> All
                </p>
                <p className='link'>Supreme Video</p>
                <p className='link'>Nile Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Supreme</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    );
}
