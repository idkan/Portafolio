import { FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid gap-6">
                    <div className="footer__item">
                        <h1 className="footer__title">Abraham</h1>
                        <span className="footer__subtitle">Software Engineer</span>
                    </div>
                    <ul className="footer__links">
                        <li className="footer__links">
                            <a href="#about" className="footer__links-item"> About</a>
                        </li>
                        <li className="footer__links">
                            <a href="#contact" className="footer__links-item"> Contact</a>
                        </li>
                        <li className="footer__links">
                            <a href="#" className="footer__links-item"> Blog</a>
                        </li>
                        <li className="footer__links">
                            <a href="#" className="footer__links-item"> Privacy Policy</a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/abraham-serena/" className="footer__socials-item">\
                            <FiLinkedin />
                        </a>
                        <a href="https://twitter.com/idkantv" className="footer__socials-item">
                            <FiTwitter />    
                        </a>
                        <a href="https://www.instagram.com/abraham_salk/" className="footer__socials-item">
                            <FiInstagram />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;