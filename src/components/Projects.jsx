import React from 'react';
import Project1 from '../assets/img/projects-01.jpg';
import Project2 from '../assets/img/projects-02.jpg';
import Project3 from '../assets/img/projects-03.jpg';
import Project4 from '../assets/img/projects-04.jpg';
import Project5 from '../assets/img/projects-05.jpg';

const Projects = () => {
    return (
        
        // <!-- Project Details Section -->
        <section id="ProjectDetails" class="pt-16 mx-6 lg:pt-20 md:mx-20 lg:mx-16 animation">
            <div class="mb-28">
                <div class="relative flex flex-nowrap justify-center">
                    <div class="max-w-2xl md:mx-auto md:text-center xl:max-w-none font-Raleway" data-aos="fade-up" data-aos-delay="200">
                        <h2 class="font-display text-center text-3xl tracking-tight text-black md:text-3xl lg:text-4xl 2xl:text-6xl font-bold" id='project_details'>Project Details</h2>
                        <p class="mt-3 text-md lg:text-xl xl:text-2xl tracking-tight text-blue text-center font-medium">These are the latest featured properties. Feel free to check them out!</p>
                            
                            {/* Green line below heading */}
                            <div class="content-center justify-center flex ">
                                <div class="content-center justify-center border-b-8 border-green-camella w-20 pt-5"></div>
                            </div>

                    </div>
                </div>

                <div class="mb-32 tablet:space-y-0 tablet:gap-y-3 grid tablet:grid-cols-2 tablet:gap-4 lg:grid-cols-4 lg:gap-4 lg:gap-y-10 mt-20 2xl:gap-x-12 justify-center content-center items-center">

                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project1} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="300">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project2} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="300">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project3} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="400">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project4} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project5} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="300">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project2} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="300">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project3} />
                    </div>
                    <div class="py-2 flex flex-wrap justify-center" data-aos="zoom-in" data-aos-delay="400">
                        <img alt="gallery" class="relative overflow-hidden transition-all hover:scale-90 ease-in duration-100 w-full shadow-xl shadow-gray-300"
                        src={Project4} />
                    </div>
            
                </div>
            </div>
        </section> 
    );
};

export default Projects;