import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg bg-secondary pt-8 px-0 pb-12 dark:bg-secondary-dark md:pt-12 md:px-0 md:pb-14">
                <div className="footer__container container grid gap-6 gap-y-14 xs:mx-4 sm:grid-cols-[repeat(2,_1fr)] md:mx-auto md:py-0 md:px-4 md:grid-cols-[repeat(3,_1fr)] lg:p-0">
                    <div className="footer__item">
                        <h1 className="footer__title text-lg mb-1 text-white">Abraham</h1>
                        <span className="footer__subtitle text-sm text-white">Software Engineer</span>
                    </div>
                    <ul className="footer__links flex flex-col gap-y-6 text-white md:flex-row md:gap-x-8">
                        <li className="footer__links hover:text-primary-light">
                            <a href="#about" className="footer__links-item"> About</a>
                        </li>
                        <li className="footer__links hover:text-primary-light">
                            <a href="#contact" className="footer__links-item"> Contact</a>
                        </li>
                        <li className="footer__links hover:text-primary-light">
                            <a href="#" className="footer__links-item"> Blog</a>
                        </li>
                    </ul>
                    <div className="footer__socials flex text-white md:justify-self-end">
                        <a href="https://github.com/idkan" target="_blank" className="footer__socials-item text-sm mr-6 hover:text-primary-light">
                            <FiGithub className="inline-block" />
                        </a>
                        <a href="https://twitter.com/idkantv" target="_blank" className="footer__socials-item text-sm mr-6 hover:text-primary-light">
                            <FiTwitter className="inline-block" />
                        </a>
                        <a href="https://www.instagram.com/abraham_salk/" target="_blank" className="footer__socials-item text-sm mr-6 hover:text-primary-light">
                            <FiInstagram className="inline-block" />
                        </a>
                    </div>
                </div>
                <p className="footer__copyright text-xs text-center text-primary-light mt-12 md:mt-[4.5rem]"> &copy; 2022 ABSE Dev. All rights reserved. </p>
            </div>
        </footer>
    );
}

export default Footer;