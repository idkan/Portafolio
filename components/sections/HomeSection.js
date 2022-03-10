import { FiLinkedin, FiGithub, FiInstagram, FiSend } from "react-icons/fi";
import { BsMouse, BsArrowDown } from "react-icons/bs";

const HomeSection = () => {
    return (
        <section className="home section bg-body dark:bg-body-dark" id="home">
            <div className="home__container container grid gap-4 xs:mx-4">
                <div className="home__content grid gap-6 grid-cols-[.5fr_3fr] pt-14 items-center xs:grid-cols-[.25fr_3fr]">
                    <div className="home__social grid grid-cols-[max-content] gap-y-4">
                        <a href="https://www.linkedin.com/in/abraham-serena/" className="home__social-icon text-lg text-primary hover:text-primary-alt" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-xl inline-block" /></a>
                        <a href="https://github.com/idkan/" className="home__social-icon text-lg text-primary hover:text-primary-alt" target="_blank" rel="noopener noreferrer"><FiGithub className="text-xl inline-block" /></a>
                        <a href="https://www.instagram.com/abraham_salk/" className="home__social-icon text-lg text-primary hover:text-primary-alt" target="_blank" rel="noopener noreferrer"><FiInstagram className="text-xl inline-block" /></a>
                    </div>
                    <div className="home__img">
                        <svg className="home__blob w-52 fill-primary" viewBox="0 0 200 187">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className="home__blob-img w-48 xs:w-44" x="12" y="18" href="./assets/images/profile.png" />
                            </g>
                        </svg>
                    </div>
                    <div className="home__data col-span-1/3">
                        <h1 className="home__title text-3xl dark:text-title-dark">Hi, I'm Abraham</h1>
                        <h3 className="home__subtitle text-xl text-text font-medium mb-3 dark:text-text-dark">Software Engineer</h3>
                        <p className="home__description mb-8 dark:text-text-dark">
                            FullStack Developer based in M&eacute;xico. I'm passionate about building's software and I'm always looking for new challenges.
                            Highly motivated and always ready to learn new things.
                        </p>
                        <a href="#contact" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center">
                            Let's Talk <FiSend className="button__icon inline-block text-xl ml-2 duration-300" />
                        </a>
                    </div>
                </div>
                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button text-primary duration-300 hover:translate-y-1 button--flex inline-flex items-center">
                        <BsMouse className="home__scroll-mouse text-3xl" />
                        <span className="home__scroll-name text-sm text-title font-medium mr-1 dark:text-text-dark">Scroll Down</span>
                        <BsArrowDown className="home__scroll-arrow text-lg" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HomeSection;