import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Selected</h2>

                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Our shop is part of REVE Tex Ltd, one of the members of REVE family; started its first retail store in 2009, today we have 18 stores at prime locations of Dhaka, Chattogram, Sylhet, Khulna & Narayanganj</p>
                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-16 gap-y-8">

                    <div>
                        <Link to='/' className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
                            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=500&h=600" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />

                            <div className="flex gap-2 absolute left-0 bottom-2">
                                <span className="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg px-3 py-1.5">-50%</span>
                                <span className="bg-white text-gray-800 text-sm font-bold tracking-wider uppercase rounded-lg px-3 py-1.5">New</span>
                            </div>
                        </Link>

                        <div className="flex justify-between items-start gap-2 px-2">
                            <div className="flex flex-col">
                                <Link to='/' className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Fancy Outfit</Link>
                                <span className="text-gray-500">by Fancy Brand</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="text-gray-600 lg:text-lg font-bold">$19.99</span>
                                <span className="text-red-500 text-sm line-through">$39.99</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to='/' className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
                            <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=500&h=600" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                        </Link>

                        <div className="flex justify-between items-start gap-2 px-2">
                            <div className="flex flex-col">
                                <Link to='/' className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Cool Outfit</Link>
                                <span className="text-gray-500">by Cool Brand</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="text-gray-600 lg:text-lg font-bold">$29.99</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to='/' className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
                            <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=500&h=600" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                        </Link>

                        <div className="flex justify-between items-start gap-2 px-2">
                            <div className="flex flex-col">
                                <Link to='/' className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Nice Outfit</Link>
                                <span className="text-gray-500">by Nice Brand</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="text-gray-600 lg:text-lg font-bold">$35.00</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to='/' className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg relative mb-2 lg:mb-3">
                            <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=500&h=600" alt="" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                        </Link>

                        <div className="flex justify-between items-start gap-2 px-2">
                            <div className="flex flex-col">
                                <Link to='/' className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">Lavish Outfit</Link>
                                <span className="text-gray-500">by Lavish Brand</span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="text-gray-600 lg:text-lg font-bold">$49.99</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;