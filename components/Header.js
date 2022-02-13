import React, { useState } from "react";
import { FiHome, FiUser, FiFileText, FiBriefcase, FiBook, FiMessageSquare, FiGrid, FiX } from "react-icons/fi";

const Navbar = () => {

    const [navMenuOpen, setNavMenuOpen] = useState(false);

    return (
        <header className="w-full fixed bottom-0 left-0 z-20 h-auto bg-white " id="header">
            <nav className="max-w-5xl h-12 flex justify-between items-center px-6">
                <a href="/" className="text-2xl font-bold text-gray-800 hover:text-primary">Abraham </a>
                <div className={`fixed ${navMenuOpen ? "bottom-0" : "-bottom-full"} left-0 w-full bg-white px-6 pt-8 pb-16 shadow-md border rounded-t-3xl duration-300`} id="nav-menu">
                    <ul className="grid gap-8 grid-cols-3">
                        <li onClick={() => setNavMenuOpen(!navMenuOpen)}><a href="#home" className="flex flex-col items-center text-sm font-medium hover:text-primary"><FiHome size={20} />Home</a></li>
                        <li onClick={() => setNavMenuOpen(!navMenuOpen)}><a href="#about" className="flex flex-col items-center text-sm font-medium hover:text-primary"><FiUser size={20} />About</a></li>
                        <li onClick={() => setNavMenuOpen(!navMenuOpen)}><a href="#skills" className="flex flex-col items-center text-sm font-medium hover:text-primary"><FiFileText size={20} />Skills</a></li>
                        <li onClick={() => setNavMenuOpen(!navMenuOpen)}><a href="#projects" className="flex flex-col items-center text-sm font-medium hover:text-primary"><FiBriefcase size={20} />Projects</a></li>
                        <li onClick={() => setNavMenuOpen(!navMenuOpen)}><a href="#blog" className="flex flex-col items-center text-sm font-medium hover:text-primary"><FiBook size={20} />Blog</a></li>
                        <li onClick={() => setNavMenuOpen(!navMenuOpen)}><a href="#contact" className="flex flex-col items-center text-sm font-medium hover:text-primary"><FiMessageSquare size={20} />Contact</a></li>
                    </ul>
                    <FiX id="nav-close" className="absolute right-5 bottom-2 text-2xl cursor-pointer text-primary hover:text-black" onClick={() => setNavMenuOpen(!navMenuOpen)}/>
                </div>
                <div>
                    <div id="nav-toggle" className="font-bold text-lg cursor-pointer hover:text-primary" onClick={() => setNavMenuOpen(!navMenuOpen)}>
                        <FiGrid className="font-bold" />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;