import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { BsArrowRight } from "react-icons/bs";

import { portfolioCards } from "../../assets/data/portfolioData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PortfolioSection = () => {

    const swiperParams = {
        cssMode: true,
        navigation: true,
        pagination: true,
        mousewheel: true,
        keyboard: true,
        loop: true,
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
        className: 'portfolio-swiper'
    };

    return (
        <section className="portfolio section mb-8" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My recent work</span>

            <div className="portfolio__container container h-80">
                <Swiper {...swiperParams} className="h-96">
                    {portfolioCards.map((card, index) => (
                        <SwiperSlide key={index} className="portfolio__content grid gap-6 px-6 py-0">
                            <img src={card.image} alt={`${card.title} APP`} className="portfolio__image w-64 rounded-lg justify-self-center" />
                            <div className="portfolio__data">
                                <h3 className="portfolio__title text-lg font-medium mb-2">{card.title}</h3>
                                <p className="portfolio__description text-xs font-normal mb-3">{card.description}</p>
                                <a href={card.link} className="button bg-primary text-white p-3 rounded-lg font-normal hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
                                    View Project
                                    <BsArrowRight className="button__icon ml-2 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioSection;