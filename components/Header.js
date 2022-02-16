import React, { useState } from "react";
import { FiHome, FiUser, FiFileText, FiBriefcase, FiBook, FiMessageSquare, FiGrid, FiX } from "react-icons/fi";

const Navbar = () => {

    const [navMenuOpen, setNavMenuOpen] = useState(false);

    const toggleNavMenu = () => {
        setNavMenuOpen(!navMenuOpen);
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Abraham </a>
                {/* <div className={`fixed ${navMenuOpen ? "bottom-0" : "-bottom-full"} left-0 w-full bg-white px-6 pt-8 pb-16 shadow-md border rounded-t-3xl duration-300`} id="nav-menu"> */}
                <div id="nav-menu" className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#home" className="nav__link"><FiHome />Home</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#about" className="nav__link"><FiUser />About</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#skills" className="nav__link"><FiFileText />Skills</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#projects" className="nav__link"><FiBriefcase />Projects</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#blog" className="nav__link"><FiBook />Blog</a></li>
                        <li className="nav__item" onClick={toggleNavMenu}><a href="#contact" className="nav__link"><FiMessageSquare />Contact</a></li>
                    </ul>
                    <FiX id="nav-close" className="nav__close" onClick={toggleNavMenu} />
                </div>
                <div className="nav__btns">
                    <div id="nav-toggle" className="nav__toggle" onClick={toggleNavMenu}>
                        <FiGrid className="font-bold" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;