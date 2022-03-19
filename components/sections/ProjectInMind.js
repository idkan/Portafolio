import { FiSend } from "react-icons/fi";

const ProjectInMind = () => {
    return (
        <section className="project section text-center md:pt-24 md:px-0 md:pb-8 md:text-left">
            <div className="project__bg bg-primary py-12 dark:bg-body-dark md:bg-body">
                <div className="project__container container grid gap-6 xs:mx-4 sm:grid-cols-[repeat(2,_1fr)] md:mx-auto md:bg-secondary md:rounded-2xl md:pt-12 md:px-10 md:pb-0 md:grid-cols-[1fr_max-content] md:gap-x-12">
                    <div className="project__data md:pt-[.8rem]">
                        <h2 className="project__title text-lg mb-3 text-white">You have a new project</h2>
                        <p className="project__description mb-6 text-white">
                            If you have a project in mind and think that I can fit on in, Let's talk about it!
                        </p>
                        <a href="#contact" className="button p-4 rounded-lg font-medium hover:bg-white button--flex inline-flex items-center button--white bg-white text-primary">
                            Contact Me <FiSend className="button__icon inline-block text-xl ml-2 duration-300 project__icon" />
                        </a>
                    </div>
                    <img className="project__img w-60 justify-self-center xs:w-48" src="./assets/images/aboutMe.png" alt="Project" />
                </div>
            </div>
        </section>
    )
}

export default ProjectInMind;