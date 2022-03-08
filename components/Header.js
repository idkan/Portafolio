import React, { useState, useEffect } from "react";
import { FiHome, FiUser, FiFileText, FiBriefcase, FiBook, FiMessageSquare, FiGrid, FiX } from "react-icons/fi";

const Navbar = () => {

    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    useEffect(function mount() {
        const sections = window.document.querySelectorAll("section[id]");

        function scrollActive() {
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 50;
                let sectionId = section.getAttribute("id");

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    window.document.querySelector(`a[href="#${sectionId}"]`).classList.add("text-primary");
                } else {
                    window.document.querySelector(`a[href="#${sectionId}"]`).classList.remove("text-primary");
                }
            });
        }

        function scrollHeader() {
            const nav = window.document.getElementById("header");
            if (window.scrollY >= 80 ) {
                console.log("scrollY", window.scrollY);
                nav.classList.add("shadow-[0_-1px_4px_rgba(0,0,0,0.15)]");
            } else {
                nav.classList.remove("shadow-[0_-1px_4px_rgba(0,0,0,0.15)]");
            }
        }

        window.addEventListener("scroll", scrollActive);
        window.addEventListener("scroll", scrollHeader);
    });

    return (
        <header className="header" id="header">
            <nav className="nav max-w-5xl h-12 flex justify-between items-center container">
                <a href="#" className="nav__logo text-title font-medium hover:text-primary">Abraham </a>
                <div id="nav-menu" className={`nav__menu fixed ${navMenuOpen ? "bottom-0" : "-bottom-full"} left-0 w-full bg-white pt-8 px-6 pb-12 shadow-[0_-1px_4px_rgba(0,0,0,0.15)] rounded-t-3xl rounded-b-sm duration-300`}>
                    <ul className="nav__list grid grid-cols-3 gap-8">
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#home" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary"><FiHome className="text-xl" />Home</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#about" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary"><FiUser className="text-xl" />About</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#skills" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary"><FiFileText className="text-xl" />Skills</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#portfolio" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary"><FiBriefcase className="text-xl" />Projects</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#blog" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary"><FiBook className="text-xl" />Blog</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#contact" className="nav__link flex flex-col items-center text-tiny text-title font-medium hover:text-primary"><FiMessageSquare className="text-xl" />Contact</a></li>
                    </ul>
                    <FiX id="nav-close" className="nav__close absolute right-5 bottom-2 text-2xl cursor-pointer text-primary hover:text-primary-alt" onClick={toggleNavMenu} />
                </div>
                <div className="nav__btns">
                    <div id="nav-toggle" className="nav__toggle text-title font-medium text-lg cursor-pointer hover:text-primary" onClick={toggleNavMenu}>
                        <FiGrid className="font-bold" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;