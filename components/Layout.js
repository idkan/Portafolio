import React, { useEffect } from "react";

import Header from './Header';
import Footer from './Footer';

import { FiArrowUp } from "react-icons/fi";

const Layout = ({ children }) => {

    useEffect(function mount() {
        function scrollUp() {
            const scrollUp = window.document.getElementById('scroll-up');
            if (window.scrollY >= 560) {
                scrollUp.classList.remove('-bottom-[20%]');
                scrollUp.classList.add('bottom-20');
            } else {
                scrollUp.classList.add('-bottom-[20%]');
                scrollUp.classList.remove('bottom-20');
            }
        }

        window.addEventListener('scroll', scrollUp);
    });

    return (
        <div className="layout">
            <Header />
            <main className="main md:py-0 md:px-4">
                {children}
            </main>
            <Footer />
            <a href="#" className="scrollUp fixed right-4 bg-primary opacity-80 py-0 px-1 rounded-md z-[9] transition-[.4s] hover:bg-primary-alt dark:bg-secondary-dark dark:hover:bg-secondary" id="scroll-up">
                <FiArrowUp className="text-2xl text-white" />
            </a>
        </div>
    )
}

export default Layout;