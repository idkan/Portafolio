import { FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

const ContactMe = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid gap-6 gap-y-12">
                <div className="contact__data">
                    <div className="contact__information flex mb-8">
                        <FiMail className="contact__icon text-[2rem] text-primary mr-3" />
                        <div className="contact__info">
                            <h3 className="contact__title text-base font-medium">Email</h3>
                            <a href="mailto:abraham.serena@hotmail.com" className="contact__link">
                                <span className="contact__subtitle text-sm text-text-light">abraham.serena@hotmail.com</span>
                            </a>
                        </div>
                    </div>
                    <div className="contact__information flex mb-8">
                        <FiLinkedin className="contact__icon text-[2rem] text-primary mr-3" />
                        <div className="contact__info">
                            <h3 className="contact__title text-base font-medium">LinkedIn</h3>
                            <span className="contact__subtitle text-sm text-text-light">Abraham Serena</span>
                        </div>
                    </div>
                    <div className="contact__information flex mb-8">
                        <FiMapPin className="contact__icon text-[2rem] text-primary mr-3" />
                        <div className="contact__info">
                            <h3 className="contact__title text-base font-medium">Location</h3>
                            <span className="contact__subtitle text-sm text-text-light">M&eacute;xico or Remote</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;