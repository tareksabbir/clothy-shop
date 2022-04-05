import React, { useContext } from 'react';
import { ReviewContext } from '../App';
import { Link } from 'react-router-dom';


const Review = () => {
    const [reviews] = useContext(ReviewContext);
    return (
        <>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">Customer Reviews</h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {
                            reviews.slice(0, 3).map((review, id) => (
                                <div
                                    key={id}
                                    review={review}
                                    className="flex flex-col border rounded-lg gap-3 p-4 md:p-6">
                                    <div className='flex gap-4 -ml-1'>
                                        <div>
                                            <img alt="content" className="object-cover object-center h-10 w-10 rounded-full" src={review.img} />
                                        </div>
                                        <div >
                                            <span className="block text-sm font-bold">{review.name}</span>
                                            <span className="block text-gray-500 text-sm">April 5, 2022</span>
                                        </div>

                                    </div>
                                    <div className="flex gap-0.5">
                                        <p>{review.ratings}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600">{review.review}</p>
                                </div>

                            ))
                        }

                    </div>
                </div>
            </div>
            <Link to='/Reviews' className="block xl:w-2/12 mx-auto bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">View All Reviews</Link>


        </>

    );
};

export default Review;