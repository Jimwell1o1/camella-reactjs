import React from "react";

const AppHeader = ({ isOpen }) => {
    return (
        <nav
        id="nav_head"
        
        className={`sticky top-23 md:top-0 z-50 navbar bg-gradient-to-r from-green-camella to-darkgreen-camella py-7 md:flex md:flex-wrap md:content-center md:justify-center md:items-center display 
            ${isOpen ? "block" : "hidden"} md:flex md:flex-wrap md:justify-center md:items-center`}
        >
            <ul className="lg:font-bold uppercase text-sm md:text-[13px] space-y-5 md:space-y-0 md:space-x-8 lg:text-lg md:flex md:flex-wrap md:justify-center md:items-center font-Raleway font-bold text-center">
                <li className="text-zinc-50 hover:text-yellow-300" data-aos="zoom-out-down" data-aos-delay="100">
                <a href="">Home</a>
                </li>
                <li className="text-zinc-50 hover:text-yellow-300" data-aos="zoom-out-down" data-aos-delay="200">
                <a href="">Location</a>
                </li>
                <li className="text-zinc-50 hover:text-yellow-300" data-aos="zoom-out-down" data-aos-delay="300">
                <a href="">House Model</a>
                </li>
                <li className="text-zinc-50 hover:text-yellow-300" data-aos="zoom-out-down" data-aos-delay="400">
                <a href="">Easy Guide</a>
                </li>
                <li className="text-zinc-50 hover:text-yellow-300" data-aos="zoom-out-down" data-aos-delay="500">
                <a href="">Buyer&apos;s Guide</a>
                </li>
                <li className="text-zinc-50 hover:text-yellow-300" data-aos="zoom-out-down" data-aos-delay="600">
                <a href="">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
};

export default AppHeader;
