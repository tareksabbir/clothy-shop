import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="border-b mb-8 bg-white">
            <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">

                <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                    <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>


                    Clothy Shoop
                </a>
                <nav className="hidden lg:flex gap-12 2xl:ml-16">
                    <Link to='/' className="text-indigo-500 text-lg font-semibold">Home</Link>
                    <Link to='/Collection' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Collections</Link>
                    <Link to='/Dashboard' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Dashboard</Link>
                    <Link to='/Reviews' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Reviews</Link>
                    <Link to='/Blog' className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Blog</Link>
                </nav>

                <div className="flex sm:border-l border-r divide-x">
                    <Link to='/' className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 hidden sm:flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Wishlist</span>
                    </Link>

                    <Link to='/' className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Account</span>
                    </Link>

                    <Link to='/' className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Cart</span>
                    </Link>

                    <button type="button" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>

                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
                    </button>
                </div>

            </div>
        </header>

    );
};

export default Navbar;