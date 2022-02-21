import { useState } from "react";

import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const JourneySection = () => {

    const [isEducationOpen, setEducationOpen] = useState(true);

    return (
        <div className="qualification selection">
            <h2 className="section__title">Journey</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs flex justify-evenly mb-8">
                    <div className="qualification__button text-lg font-medium cursor-pointer hover:text-primary button--flex inline-flex items-center" onClick={() => setEducationOpen(true)}>
                        <FaGraduationCap className="qualification__icon text-3xl mr-1" />
                        Education
                    </div>
                    <div className="qualification__button text-lg font-medium cursor-pointer hover:text-primary button--flex inline-flex items-center" onClick={() => setEducationOpen(false)}>
                        <FiBriefcase className="qualification__icon text-3xl mr-1" />
                        Work
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={`qualification__content ${isEducationOpen ? "block" : "hidden"}`}>
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
                            <div>
                                <h3 className="qualification__title text-base font-medium">Computer Engineering</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-4">M&eacute;xico - University</span>
                                <div className="qualification__calendar text-tiny text-text-light inline-flex items-center">
                                    <FiCalendar className="qualification__icon mr-1" />
                                    2015 - 2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder inline-block w-3 h-3 bg-primary rounded-full"></span>
                                <span className="qualification__line block w-px h-full bg-primary translate-x-[5.5px] translate-y-[-7px]"></span>
                            </div>
                        </div>
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
                            <div></div>
                            <div>
                                <span className="qualification__rounder inline-block w-3 h-3 bg-primary rounded-full"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title text-base font-medium">Computer Engineering</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-4">Chile - University</span>
                                <div className="qualification__calendar text-tiny text-text-light inline-flex items-center">
                                    <FiCalendar className="qualification__icon mr-1" />
                                    2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`qualification__content ${isEducationOpen ? "hidden" : "block"}`}>
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
                            <div></div>
                            <div>
                                <span className="qualification__rounder inline-block w-3 h-3 bg-primary rounded-full"></span>
                                <span className="qualification__line block w-px h-full bg-primary translate-x-[5.5px] translate-y-[-7px]"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title text-base font-medium">Digital Developer Intern</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-4">Softtek - Aguascalientes</span>
                                <div className="qualification__calendar text-tiny text-text-light inline-flex items-center">
                                    <FiCalendar className="qualification__icon mr-1" />
                                    2019 - 2020
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6">
                            <div>
                                <h3 className="qualification__title text-base font-medium">Software Engineer</h3>
                                <span className="qualification__subtitle inline-block text-sm mb-4">Softtek - Aguascalientes</span>
                                <div className="qualification__calendar text-tiny text-text-light inline-flex items-center">
                                    <FiCalendar className="qualification__icon mr-1" />
                                    2020 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder inline-block w-3 h-3 bg-primary rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneySection;