import React from 'react';
import FooterLogo from '../assets/img/footer_logo.png';

const AppFooter = () => {
    return (
        <footer>
            <div class="w-full flex flex-wrap mt-10 pb-24 bg-footer-camella bg-cover bg-right bg-no-repeat bg-green-500/5 bg-blend-overlay lg:justify-start xl:pl-[10rem] 4k:pl-[18rem] 4k:justify-center">
                <div class="pt-11 justify-center content-center text-center lg:justify-start lg:content-start lg:text-start lg:w-2/4 xl:w-[35rem] mx-6 md:mx-20 lg:mx-0 lg:px-14"> 
                    <div class="flex justify-center lg:block lg:justify-start">
                        <a href="https://dev5.primeoutsourcing.shop/tailwind/src">
                            <img src={FooterLogo} class="pb-4" alt="" />
                        </a>
                    </div>
                    <span class="text-white font-light hover:text-yellow-300 cursor-default">ALL THAT YOU NEED IS HERE!</span>
                    <p class="text-white text-sm leading-tight pt-5 font-light">
                        Camella, the top and largest home developer in the Philippines, has created an immense selection of quality houses within a master-planned community where everything that you need is close to your home.
                    </p>
                </div>
                
                <div class="w-full lg:w-1/5 xl:w-[14rem] flex flex-wrap justify-center content-center lg:block lg:justify-start lg:content-start lg:pt-8">
                    <div class="justify-center text-center content-center lg:justify-start lg:text-start lg:content-start px-4 pt-10 text-white font-medium">
                        <ul class="lg:leading-loose">
                            <li><a href="" class="hover:text-yellow-300">HOME</a></li>
                            <li><a href="" class="hover:text-yellow-300">LOCATION</a></li>
                            <li><a href="" class="hover:text-yellow-300">HOUSES</a></li>
                            <li><a href="" class="hover:text-yellow-300">EASY GUIDE</a></li>
                            <li><a href="" class="hover:text-yellow-300">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>

                <div class="w-full lg:w-72 px-10 mt-9 justify-center flex flex-wrap lg:block lg:justify-start lg:pt-8">
                    <h5 class="font-bold text-white pb-2">CONNECT WITH US</h5>
                        <div class="flex flex-wrap justify-center content-center w-full lg:block">
                            <span>
                                <a href=""><ion-icon name="logo-facebook" class="rounded-full text-2xl bg-[#b5cb00] text-white p-2 mb-2 mr-[5px] hover:bg-[#2568ce] hover:text-[2rem] transition-all ease-in" /></a>
                            </span>
                            <span>
                                <a href=""><ion-icon name="logo-instagram" class="rounded-full text-2xl bg-[#b5cb00] text-white p-2 mb-2 mr-[5px]  hover:bg-gradient-to-r from-[#e95950] to-[#8a3ab9] hover:text-[2rem] transition-all ease-in"/></a>
                            </span>
                            <span>
                                <a href=""><ion-icon name="logo-linkedin" class="rounded-full text-2xl bg-[#b5cb00] text-white p-2 mb-2 mr-[5px] hover:bg-[#2568ce] hover:text-[2rem] transition-all ease-in"/></a>
                            </span>
                            <span>
                                <a href=""><ion-icon name="logo-youtube" class="rounded-full text-2xl bg-[#b5cb00] text-white p-2 mb-2 mr-[5px] hover:bg-[#cf4444] hover:text-[2rem] transition-all ease-in"/></a>
                        </span>
                        </div>
                </div>
            </div>
            <div class="w-full flex flex-wrap justify-center footer-legal bg-[#252525] text-gray-400 py-5">
                <div class="container flex flex-wrap justify-center items-center">
                    <div id="copyright" class="flex flex-wrap md:block justify-center items-center lg:flex lg:flex-wrap px-5">
                        <span class="">©2021 Camella. All Rights Reserved </span>
                    </div>
                    <div class="flex flex-wrap justify-center items-center">
                        <a href="" class="mx-2">Terms of Use</a>
                        <span>|</span>
                        <a href="" class="mx-2">Privacy Statement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;