import React from 'react';
import FacebookHeader from '../assets/img/fb-api.jpg';

const Contact = () => {
    return (
        <section id="contact" class="py-24 animation">
            <div class="flex flex-wrap justify-center content-center gap-12 md:gap-x-28 lg:gap-x-8 mb-28">
                <div id="location" class="md:w-52 lg:w-1/5 xl:w-1/5 justify-center mb-8 text-center px-20 md:px-0 lg:px-5" data-aos="zoom-out">
                    <span>
                        <ion-icon name="location-sharp" class="rounded-full text-lg text-[5rem] lg:text-[3rem] xl:text-[5em] bg-gradient-to-r from-green-camella to-darkgreen-camella text-white p-6 mb-5"></ion-icon>
                    </span>
                    <h3 class="text-2xl lg:text-lg font-bold text-green-700 mb-3 text-center">LOCATION</h3>
                    <p class="text-gray-600">#123 Camella General Trias Cavite</p>
                </div>
                <div id="phone" class="md:w-52 lg:w-1/5 xl:w-1/5 justify-center mb-8 text-center px-20 md:px-0 lg:px-5" data-aos="zoom-out" data-aos-delay="200">
                    <span>
                        <ion-icon name="call-sharp" class="rounded-full text-[5rem] lg:text-[3rem] xl:text-[5em] bg-gradient-to-r from-green-camella to-darkgreen-camella text-white p-6 mb-5"></ion-icon>
                    </span>
                    <h3 class="text-2xl lg:text-lg font-bold text-green-700 mb-3">PHONE</h3>
                    <p class="text-gray-600 ">+092 123293 2</p>
                </div>
                <div id="email" class="md:w-52 lg:w-1/5 xl:w-1/5 justify-center mb-8 text-center px-20 md:px-0 lg:px-5" data-aos="zoom-out" data-aos-delay="400">
                    <span>
                        <ion-icon name="mail" class="rounded-full text-[5rem] lg:text-[3rem] xl:text-[5em] bg-gradient-to-r from-green-camella to-darkgreen-camella text-white p-6 mb-5"></ion-icon>
                    </span>
                    <h3 class="text-2xl lg:text-lg font-bold text-green-700 mb-3">EMAIL</h3>
                    <p class="text-gray-600 ">mail@camella.com</p>
                </div>
                <div id="time" class="md:w-52 lg:w-1/5 xl:w-1/5 justify-center mb-8 text-center px-20 md:px-0 lg:px-5" data-aos="zoom-out" data-aos-delay="600">
                    <span>
                        <ion-icon name="time-outline" class="rounded-full text-[5rem] lg:text-[3rem] xl:text-[5em] bg-gradient-to-r from-green-camella to-darkgreen-camella text-white p-6 mb-5"></ion-icon>
                    </span>
                    <h3 class="text-2xl lg:text-lg font-bold text-green-700 mb-3">OPEN HOURS</h3>
                    <p class="text-gray-600 ">10:00AM - 6:00PM (Mon-Sat)</p>
                </div>
                <hr class="w-9/12 border-solid border-[1px] border-neutral-300" />
            </div>
            <div class="flex flex-wrap justify-center xl:justify-start md:gap-24 xl:gap-36 2xl:gap-60 animation mx-8 md:mx-20 gap-y-14 xl:mx-60 4k:mx-[35rem]">
                <div id="contact-form" class="w-full lg:w-[40%] xl:px-3" data-aos="fade-up" data-aos-delay="200">
                    <h4 class="font-bold text-2xl lg:text-4xl md:text-3xl xl:text-5xl">Get in Touch with Us!</h4>
                    <form class="mt-10">
                        <div class="mb-6">
                            <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 lg:p-4 lg:text-[17px]" placeholder="Name" required />
                        </div> 
                        <div class="grid gap-6 mb-6 lg:grid-cols-1 xl:grid-cols-2">
                            <div>
                                <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 lg:p-4 lg:text-[17px]" placeholder="Email" required />
                            </div>
                            <div>
                                <input type="text" id="first_name" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 lg:p-4 lg:text-[17px]" placeholder="Phone" required />
                            </div>
                        </div>
                        <div class="mb-6">
                            <textarea id="message" rows="4" class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full p-2.5 lg:p-4 lg:text-[17px]" placeholder="Your message..."></textarea>
                        </div> 
                        <button type="submit" class="text-[#fbecf1] font-Raleway font-medium bg-green-camella hover:bg-[#508745] focus:ring-4 focus:outline-none focus:ring-green-300 text-sm xl:text-md 2xl:text-lg w-full sm:w-auto px-16 py-2.5 lg:py-3 lg:text-md lg:px-14 text-center">Send Message</button>
                    </form>
                </div>
                <div id="facebook" class="lg:mt-20 lg:w-1/3" >
                    <img src={FacebookHeader} class="md:h-48 xl:h-60 shadow-xl shadow-black-500/50" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Contact;