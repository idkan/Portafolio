import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { BsArrowRight } from "react-icons/bs";

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
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
        className: 'portfolio-swiper'
    };

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My recent work</span>

            <div className="portfolio__container container">
                <Swiper {...swiperParams} >
                    <SwiperSlide className="portfolio__content grid px-6 py-0">
                        <img src="./assets/images/rentMe.png" alt="Rent Me APP" className="portfolio__image w-64 rounded-lg justify-self-center" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-lg font-medium mb-2">Rent Me APP</h3>
                            <p className="portfolio__description mb-3">
                                RentMe is a web application that allows users to Rent or Buy a property.
                                With an advanced search feature, users can find the property they are looking for.
                                It full responsive and mobile friendly.
                            </p>
                            <a href="#" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
                                View Project
                                <BsArrowRight className="button__icon ml-2 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="portfolio__content grid px-6 py-0">
                        <img src="./assets/images/cryptoWorld.png" alt="Crypto World APP" className="portfolio__image w-64 rounded-lg justify-self-center" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-lg font-medium mb-2">Crypto World</h3>
                            <p className="portfolio__description">
                                Crypto World is a web application that allows users to see the current price of the most famous cryptocurrencies in the world, all in one place.
                                Allowing users to compare the price and see the latest news about the cryptocurrencies.
                            </p>
                            <a href="#" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
                                View Project
                                <BsArrowRight className="button__icon ml-2 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="portfolio__content grid px-6 py-0">
                        <img src="./assets/images/travely.png" alt="Portfolio 2" className="portfolio__image w-64 rounded-lg justify-self-center" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-lg font-medium mb-2">Travely</h3>
                            <p className="portfolio__description">
                                Travely is a web application that allows users to search for a destination and see the most popular places in that destination.
                                Food, hotels, activities, and more. All in one place.
                            </p>
                            <a href="#" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
                                View Project
                                <BsArrowRight className="button__icon ml-2 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default PortfolioSection;