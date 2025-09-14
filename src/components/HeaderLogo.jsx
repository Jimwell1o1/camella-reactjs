import React from "react";
import IconLogo from "../assets/img/logo.png";

const HeaderLogo = ({ isOpen, menuClick }) => {
    return (
        <nav className="sticky md:static top-0 z-50 md:justify-center lg:overflow-hidden overflow-auto flex bg-amber-50 lg:content-center lg:items-center justify-between items-center py-4 px-4 md:px-20 lg:px-16 xl:px-32 2xl:px-48">
            <a href="#">
                <img
                src={IconLogo}
                className="logo h-[4em] lg:h-[6em] xl:h-[7em]"
                alt="Camella Logo"
                />
            </a>

            {/* Hamburger menu (mobile only) */}
            <span className="text-3xl cursor-pointer md:hidden mx-2">
                <ion-icon
                name={isOpen ? "close-outline" : "menu-outline"}
                onClick={menuClick}
                style={{ cursor: "pointer" }}
                ></ion-icon>
            </span>
        </nav>
    );
};

export default HeaderLogo;
