import { useState } from "react";

import { FiChevronDown, FiServer } from "react-icons/fi";
import { BsBraces } from "react-icons/bs";

const SkillsSection = () => {

    const [isFrontOpen, setIsFrontOpen] = useState(true);

    const toggleFront = () => {
        setIsFrontOpen(!isFrontOpen);
    }

    const skills = [
        {
            title: "Frontend Developer",
            icon: <BsBraces className="skills__icon text-3xl text-primary mr-3" />,
            isOpen: isFrontOpen,
            years: "More than 3 years",
            technologies: [
                {
                    name: "HTML5",
                    level: "90%",
                },
                {
                    name: "CSS3",
                    level: "90%",
                },
                {
                    name: "JavaScript",
                    level: "90%",
                },
                {
                    name: "React",
                    level: "70%",
                },
            ],
        },
        {
            title: "Backend Developer",
            icon: <FiServer className="skills__icon text-3xl text-primary mr-3" />,
            isOpen: !isFrontOpen,
            years: "More than 2.5 years",
            technologies: [
                {
                    name: "Node.js",
                    level: "80%",
                },
                {
                    name: "PHP",
                    level: "70%",
                },
                {
                    name: "Java",
                    level: "60%",
                },
                {
                    name: "Python",
                    level: "40%",
                },
            ],
        },
    ];

    return (
        <section className="skills section bg-body dark:bg-body-dark" id="skills">
            <h2 className="section__title dark:text-title-dark">Skills</h2>
            <span className="section__subtitle dark:text-text-dark">My Technical Skills</span>
            <div className="skills__container container grid gap-6 gap-y-0">
                <div className="skills__data col-span-1/3">
                    {skills.map((item, index) => (
                        <div className="skills__content" key={index} onClick={toggleFront}>
                            <div className="skills__header flex items-center mb-10 cursor-pointer">
                                {item.icon}
                                <div>
                                    <h1 className="skills__title text-xl dark:text-title-dark xs:text-[.938rem]">{item.title}</h1>
                                    <span className="skills__subtitle text-base text-text-light font-medium mb-3">{item.years}</span>
                                </div>
                                <FiChevronDown className={`skills__arrow text-3xl text-primary ml-auto duration-[400ms]  ${item.isOpen ? "rotate-[-180deg]" : ""}`} />
                            </div>
                            <div className={`skills__list grid gap-6 ${item.isOpen ? "h-max mb-10" : "h-0 overflow-hidden"}`}>
                                {item.technologies.map((tech, index) => (
                                    <div className="skills__data" key={index}>
                                        <div className="skills__titles flex justify-between mb-2 dark:text-title-dark">
                                            <h3 className="skills__name text-base font-medium dark:text-title-dark">{tech.name}</h3>
                                            <span className="skills__number">{tech.level}</span>
                                        </div>
                                        <div className="skills__bar h-1 rounded-md bg-text-light">
                                            <span className="skills__percentage h-1 rounded-md block bg-primary skills__html" style={{ width: tech.level }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;