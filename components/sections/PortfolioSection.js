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
        loop: true,
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
        className: 'portfolio-swiper'
    };

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My recent work</span>

            <div className="portfolio__container container h-80">
                <Swiper {...swiperParams} className="h-96">
                    <SwiperSlide className="portfolio__content grid px-6 py-0">
                        <img src="./assets/images/rentMe.png" alt="Rent Me APP" className="portfolio__image w-64 rounded-lg justify-self-center" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-lg font-medium mb-2">RentMe</h3>
                            <p className="portfolio__description font-normal mb-3">
                                RentMe is a web app that allows users to Rent or Buy a property.
                                With an advanced search feature, users can find the property they are looking for.
                            </p>
                            <a href="#" className="button bg-primary text-white p-3 rounded-lg font-normal hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
                                View Project
                                <BsArrowRight className="button__icon ml-2 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="portfolio__content grid px-6 py-0">
                        <img src="./assets/images/cryptoWorld.png" alt="Crypto World APP" className="portfolio__image w-64 rounded-lg justify-self-center" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-lg font-medium mb-2">CryptoWorld</h3>
                            <p className="portfolio__description font-normal mb-3">
                                CryptoWorld is a web app that allows users to see cryptocurrencies information.
                                Allowing users to news and prices about the cryptocurrencies.
                            </p>
                            <a href="#" className="button bg-primary text-white p-3 rounded-lg font-normal hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
                                View Project
                                <BsArrowRight className="button__icon ml-2 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="portfolio__content grid px-6 py-0">
                        <img src="./assets/images/travely.png" alt="Portfolio 2" className="portfolio__image w-64 rounded-lg justify-self-center" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-lg font-medium mb-2">Travely</h3>
                            <p className="portfolio__description font-normal mb-3">
                                Travely is a web app that allows users to search for a destination and see the most popular places.
                                Food, hotels, activities, and more. All in one place.
                            </p>
                            <a href="#" className="button bg-primary text-white p-3 rounded-lg font-normal hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button group">
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