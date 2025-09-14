import React from 'react';

const Hero = () => {
  return (
    <section id="hero" class="z-40 w-full h-full lg:h-3/4 pb-40 xl:pb-60 bottom-9 bg-hero-camella bg-cover bg-center flex justify-center bg-green-900 bg-blend-overlay-darken">
        <div class="relative w-full flex flex-col items-center mt-16 lg:mt-36 bg-blue/[0.5] font-Raleway animation px-6 md:px-20 lg:px-16">
            <h1 class="header text-center text-4xl lg:text-5xl 2xl:text-7xl text-white font-bold drop-shadow-2xl" data-aos="zoom-out" data-aos-delay="800">Camela General Trias</h1>
            <p class="desc mt-5 text-center lg:text-xl xl:text-2xl 2xl:text-2xl w-full lg:w-full 2xl:w-[80%] font-light text-white mb-2 text-[16px] drop-shadow-2xl px-2" data-aos="zoom-out" data-aos-delay="1200">Finding Solution in Buy and Sell Homes, helping people the right decision of Real Estate Investment.</p>

            <div class="block mx-4 p-4 sm:px-20 lg:px-0 w-full lg:w-full 2xl:w-[80%] mt-2 lg:h-full 2xl:h-48 bg-black/[0.4] justify-center items-center content-center" data-aos="fade-up" data-aos-delay="1400">
                <form class="block w-full justify-center content-center lg:block" action="" method="post">
                    <div class="block lg:flex lg:flex-wrap content-center justify-center lg:gap-x-3">
                        <select class="bg-white text-[12px] sm:text-sm lg:text-sm 2xl:text-xl p-2 2xl:py-3 my-2 text-gray-600 w-full lg:w-[23%]">
                            <option selected disabled>Project Type</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="bg-white text-[12px] sm:text-sm lg:text-sm 2xl:text-xl p-2 2xl:py-3 my-2 text-gray-600 w-full lg:w-[24%]">
                            <option selected disabled>Brand</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="bg-white text-[12px] sm:text-sm lg:text-sm 2xl:text-xl p-2 2xl:py-3 my-2 text-gray-600 w-full lg:w-[24%]">
                            <option selected disabled>Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <select class="bg-white text-[12px] sm:text-sm lg:text-sm 2xl:text-xl p-2 2xl:py-3 my-2 text-gray-600 w-full lg:w-[23%]">
                            <option selected disabled>Price Range</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="justify-center flex flex-wrap">
                        <button class="flex flex-nowrap justify-center mt-2 lg:mt-5 text-[12px] lg:text-sm 2xl:text-xl px-14 lg:px-20 py-2 lg:py-3 2xl:mt-8 bg-gradient-to-r bg-green-camella hover:bg-[#56914a] text-white font-semibold drop-shadow-lg uppercase"
                        href="#">Search</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Hero;