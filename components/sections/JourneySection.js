import { useState } from "react";

import { FaGraduationCap } from "react-icons/fa";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const JourneySection = () => {

    const [isEducationOpen, setEducationOpen] = useState(true);

    const MyJourney = [
        {
            title: "Education",
            logo: <FaGraduationCap className="qualification__icon text-3xl mr-1" />,
            current: true,
            isOpen: isEducationOpen,
            data: [
                {
                    title: "Computer Engineering",
                    location: "México - University",
                    date: "2015 - 2020",
                    position: "left",
                    isLast: false
                },
                {
                    title: "Computer Engineering",
                    location: "Chile - University",
                    date: "2019",
                    position: "right",
                    isLast: true
                },
            ]
        },
        {
            title: "Work",
            logo: <FiBriefcase className="qualification__icon text-3xl mr-1" />,
            current: false,
            isOpen: !isEducationOpen,
            data: [
                {
                    title: "Digital Developer Intern",
                    location: "Softtek - Aguascalientes",
                    date: "2019 - 2020",
                    position: "right",
                    isLast: false
                },
                {
                    title: "Software Engineer",
                    location: "Softtek - Aguascalientes",
                    date: "2020 - Present",
                    position: "left",
                    isLast: true
                },
            ]
        }
    ];

    return (
        <section className="qualification selection">
            <h2 className="section__title">Journey</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs flex justify-evenly mb-8" >
                    {MyJourney.map((item, index) => (
                        <div className="qualification__button text-lg font-medium cursor-pointer hover:text-primary button--flex inline-flex items-center" onClick={() => setEducationOpen(item.current)} key={index}>
                            {item.logo}
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className="qualification__sections">
                    {MyJourney.map((item, index) => (
                        <div className={`qualification__content ${item.isOpen ? "block" : "hidden"}`} key={index}>
                            {item.data.map((data, index) => (
                                <div className="qualification__data grid grid-cols-[1fr_max-content_1fr] gap-x-6" key={index}>
                                    {data.position === "left" && (
                                        <>
                                            <div>
                                                <h3 className="qualification__title text-base font-medium">{data.title}</h3>
                                                <span className="qualification__subtitle inline-block text-sm mb-4">{data.location}</span>
                                                <div className="qualification__calendar text-tiny text-text-light inline-flex items-center">
                                                    <FiCalendar className="qualification__icon mr-1" />
                                                    {data.date}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="qualification__rounder inline-block w-3 h-3 bg-primary rounded-full"></span>
                                                {!data.isLast && <span className="qualification__line block w-px h-full bg-primary translate-x-[5.5px] translate-y-[-7px]"></span>}

                                            </div>
                                        </>
                                    )}
                                    {data.position === "right" && (
                                        <>
                                            <div></div>
                                            <div>
                                                <span className="qualification__rounder inline-block w-3 h-3 bg-primary rounded-full"></span>
                                                {!data.isLast && <span className="qualification__line block w-px h-full bg-primary translate-x-[5.5px] translate-y-[-7px]"></span>}
                                            </div>
                                            <div>
                                                <h3 className="qualification__title text-base font-medium">{data.title}</h3>
                                                <span className="qualification__subtitle inline-block text-sm mb-4">{data.location}</span>
                                                <div className="qualification__calendar text-tiny text-text-light flex items-center">
                                                    <FiCalendar className="qualification__icon mr-1" />
                                                    {data.date}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JourneySection;