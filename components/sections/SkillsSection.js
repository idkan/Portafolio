import { useState } from "react";

import { FiChevronDown, FiServer } from "react-icons/fi";
import { BsBraces } from "react-icons/bs";

const SkillsSection = () => {

    const [isFrontOpen, setIsFrontOpen] = useState(true);

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Skills</span>
            <div className="skills__container container grid gap-6 gap-y-0">
                <div className="skills__data col-span-1/3">
                    <div className="skills__content" onClick={() => setIsFrontOpen(!isFrontOpen)}>
                        <div className="skills__header flex items-center mb-10 cursor-pointer">
                            <BsBraces className="skills__icon text-3xl text-primary mr-3" />
                            <div>
                                <h1 className="skills__title text-xl">Frontend Developer</h1>
                                <span className="skills__subtitle text-base text-text-light font-medium mb-3">More than 3 years</span>
                            </div>
                            <FiChevronDown className={`skills__arrow text-3xl text-primary ml-auto duration-[400ms]  ${isFrontOpen ? "rotate-[-180deg]" : ""}`} />
                        </div>
                        <div className={`skills__list grid gap-6 ${isFrontOpen ? "h-max mb-10" : "h-0 overflow-hidden"}`}>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__html" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">CSS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__css" style={{ width: "80%" }} />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">JavaScript</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__javascript" style={{ width: "90%" }} />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">React</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__react" style={{ width: "60%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills__content" onClick={() => setIsFrontOpen(!isFrontOpen)}>
                        <div className="skills__header flex items-center mb-10 cursor-pointer">
                            <FiServer className="skills__icon text-3xl text-primary mr-3" />
                            <div>
                                <h1 className="skills__title text-xl">Backend Developer</h1>
                                <span className="skills__subtitle text-base text-text-light font-medium mb-3">More than 2.5 years</span>
                            </div>
                            <FiChevronDown className={`skills__arrow text-3xl text-primary ml-auto duration-[400ms]  ${isFrontOpen ? "" : "rotate-[-180deg]"}`} />
                        </div>
                        <div className={`skills__list grid gap-6 ${isFrontOpen ? "h-0 overflow-hidden" : "h-max mb-10"}`}>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">NodeJS</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__node" style={{ width: "80%" }} />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">PHP</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__php" style={{ width: "70%" }} />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">Java</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__java" style={{ width: "60%" }} />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles flex justify-between mb-2">
                                    <h3 className="skills__name text-base font-medium">Python</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar h-1 rounded-md bg-text-light">
                                    <span className="skills__percentage h-1 rounded-md block bg-primary skills__python" style={{ width: "55%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;