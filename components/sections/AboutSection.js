import { FiDownload } from "react-icons/fi";
import { experience } from "../../assets/data/portfolioData";

const AboutSection = () => {

    return (
        <section className="about section bg-body dark:bg-body-dark md:pt-24 md:px-0 md:pb-8" id="about">
            <h2 className="section__title dark:text-title-dark">About Me</h2>
            <span className="section__subtitle dark:text-text-dark md:mb-16">My Introduction</span>
            <div className="about__container container grid gap-6 xs:mx-4 sm:grid-cols-[repeat(2,_1fr)] md:mx-auto md:gap-x-20">
                <img src="./assets/images/contactMe.png" alt="About Me" className="about__img w-52 rounded-lg justify-self-center self-center md:w-96" />
                <div className="about__data">
                    <p className="about__description text-center mb-10 md:text-left">
                        Software Engineer with a background in Web Development. I enjoy creating clean and efficient code. I'm always looking for new challenges that will help me to improve my skills.
                    </p>
                    <div className="about__info flex justify-evenly mb-10 md:justify-between">
                        {experience.map((item, index) => (
                            <div className="about__info-item" key={index}>
                                <span className="about__info-title block text-center text-lg font-semibold text-title dark:text-title-dark">{item.years}</span>
                                <span className="about__info-name block text-center text-tiny" dangerouslySetInnerHTML={{ __html: item.title }}></span>
                            </div>
                        ))}
                    </div>
                    <div className="about__buttons flex justify-center md:justify-left">
                        <a href="./assets/pdf/resume2022.pdf" download="Resume_AbrahamSerena_2022" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center">
                            Download CV <FiDownload className="button__icon inline-block text-xl ml-2 duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;