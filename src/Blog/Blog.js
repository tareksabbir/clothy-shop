import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">What is Context API?</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">The Context API is a React structure that allows us to share unique details and aids with prop-drilling at all levels of an app.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">One of the best things about React is that we can address any problem in a variety of ways. In React, we have a number of different form libraries, a number of CSS libraries, and a number of libraries dedicated to state data concerns. As a result of a large number of libraries available, we may unintentionally install and utilize libraries that we do not require. Context API is a React API that can alleviate many of the issues that modern apps have with state management and how the state is passed to their components.</p>
                                <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1545454675-60abfab2a58a?auto=format&q=75&fit=crop&crop=top&w=1200&h=500" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img alt="content" className="object-cover object-center h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?auto=format&q=75&fit=crop&crop=top&w=600&h=600" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">What is Semantic Tag?</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">For both the browser and the developer, a semantic element is readable and understood.</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">For both the browser and the developer, a semantic element is readable and understood. Table, header, footer, section, and summery tags are all instances of tags. Because semantic tags are easier to understand, it appears that reading a code with them is easier. The browser can also comprehend the tags and how they are used, resulting in improved performance. Semantic elements, on the whole, result in code that is more consistent. It is made easier for everyone by establishing a uniform semantic element.</p>
                                <Link to='/' className="text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;