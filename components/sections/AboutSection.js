import { FiDownload } from "react-icons/fi";
import { experience } from "../../assets/data/portfolioData";

const AboutSection = () => {

    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container container grid gap-6">
                <img src="./assets/images/about.png" alt="About Me" className="about__img w-52 rounded-lg justify-self-center self-center" />
                <div className="about__data">
                    <p className="about__description text-center mb-10">
                        Software Engineer with a background in Web Development. I enjoy creating clean and efficient code. I'm always looking for new challenges that will help me to improve my skills.
                    </p>
                    <div className="about__info flex justify-evenly mb-10">
                        {experience.map((item, index) => (
                            <div className="about__info-item" key={index}>
                                <span className="about__info-title block text-center text-lg font-semibold text-title">{item.years}</span>
                                <span className="about__info-name block text-center text-tiny" dangerouslySetInnerHTML={{ __html: item.title }}></span>
                            </div>
                        ))}
                    </div>
                    <div className="about__buttons flex justify-center">
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