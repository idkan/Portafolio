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
                            <a href="#" className="footer__links-item"> About</a>
                        </li>
                        <li className="footer__links">
                            <a href="#" className="footer__links-item"> Contact</a>
                        </li>
                        <li className="footer__links">
                            <a href="#" className="footer__links-item"> Blog</a>
                        </li>
                        <li className="footer__links">
                            <a href="#" className="footer__links-item"> Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;