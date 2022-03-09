import { FiSend } from "react-icons/fi";

const ProjectInMind = () => {
    return (
        <section className="project text-center selection bg-primary py-12 dark:bg-secondary-dark">
            <div className="project__bg">
                <div className="project__container container grid gap-6">
                    <div className="project__data">
                        <h2 className="project__title text-lg mb-3 text-white">You have a new project</h2>
                        <p className="project__description mb-6 text-white">
                            If you have a project in mind and think that I can fit on in, Let's talk about it!
                        </p>
                        <a href="#contact" className="button p-4 rounded-lg font-medium hover:bg-white button--flex inline-flex items-center button--white bg-white text-primary">
                            Contact Me <FiSend className="button__icon inline-block text-xl ml-2 duration-300 project__icon" />
                        </a>
                    </div>
                    <img className="project__img w-60 justify-self-center" src="./assets/images/aboutMe.png" alt="Project" />
                </div>
            </div>
        </section>
    )
}

export default ProjectInMind;