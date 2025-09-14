import React from 'react';
import House1 from '../assets/img/house-01.jpg';
import House2 from '../assets/img/house-02.jpg';
import House3 from '../assets/img/house-03.jpg';

const Houses = () => {
    return (
        // <!-- Model House Section -->
        <section id="model-house" class="mt-16 animation">
            <div class="modelhouse w-full bg-top-bg-house-camella bg-no-repeat bg-left-top bg-[length:250px_200px] lg:bg-[length:700px_400px] bg-[#fef7ed] pb-8 pt-20">
                <div class="max-w-2xl mx-auto md:text-center xl:max-w-none font-Raleway px-6 md:px-20" data-aos="fade-up" data-aos-delay="200">
                    <h2 class="font-display text-center text-3xl tracking-tight text-black md:text-3xl lg:text-4xl xl:text-6xl font-bold">Model Houses</h2>
                    <p class="mt-3 text-md lg:text-xl xl:text-2xl tracking-tight text-blue text-center font-medium">Keeping a safe commmunity starts with a healthy home.</p>
                    
                    {/* <!-- Green line below heading --> */}
                    <div class="content-center justify-center flex ">
                        <div class="content-center justify-center border-b-8 border-green-camella w-20 pt-5"></div>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 gap-y-4 lg:gap-y-5 xl:gap-y-7 gap-x-3 mb-32 mt-20 justify-center content-center items-center mx-6 md:mx-20 lg:mx-16 xl:mx-60 4k:mx-[35rem]">  

                    <div class="py-2 lg:px-0 flex justify-center content-center " data-aos="zoom-in" data-aos-delay="200">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                            <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House1} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Greta</h5>
                                <p class="text-md">Php <span class="font-bold">8,713,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Grande Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="mr-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                            <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House2} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Freya</h5>
                                <p class="text-md">Php <span class="font-bold">8,713,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Grande Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="m-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House3} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Ella</h5>
                                <p class="text-md">Php <span class="font-bold">5,995,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Easy Home Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="m-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="200">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House1} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Greta</h5>
                                <p class="text-md">Php <span class="font-bold">8,713,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Grande Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="mr-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House2} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Freya</h5>
                                <p class="text-md">Php <span class="font-bold">8,713,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Grande Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="m-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House3} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Ella</h5>
                                <p class="text-md">Php <span class="font-bold">5,995,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Easy Home Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="m-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="200">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House1} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Greta</h5>
                                <p class="text-md">Php <span class="font-bold">8,713,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Grande Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="mr-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House2} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Freya</h5>
                                <p class="text-md">Php <span class="font-bold">8,713,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Grande Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="m-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="py-2 lg:px-0 flex justify-center content-center" data-aos="zoom-in" data-aos-delay="300">
                        <div class="w-full max-w-md bg-white border border-white cursor-pointer hover:shadow-2xl transition-all ease-in duration-200 shadow-md">
                                <img class="p-2 object-cover xl:h-72 xl:w-[600px]" src={House3} alt="" />
                            <div class="p-5 pt-0">
                                <h5 class="mb-1 text-xl font-bold tracking-tight text-[#1b7454]">Camella Ella</h5>
                                <p class="text-md">Php <span class="font-bold">5,995,000.00</span></p>
                                <p class="text-sm mt-1 text-gray-700 dark:text-gray-400">Easy Home Series</p>
                                <ul class="m-0 text-gray-700 dark:text-gray-600 text-md flex flex-wrap">
                                    <li class="mr-5">5 Bedrooms</li>
                                    <li class="mr-5">3 Toilet & Baths</li>
                                    <li class="m-0">166sqm</li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Houses;