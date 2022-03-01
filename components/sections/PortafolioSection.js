import { BsArrowRight } from "react-icons/bs";

const PortafolioSection = () => {

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My recent work</span>

            <div className="portfolio__container container">
                <div className="portfolio__item">
                    <div className="portfolio__content grid">
                        <img src="" alt="Portfolio 1" className="portfolio__image" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-base font-medium">Portfolio 1</h3>
                            <p className="portfolio__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <a href="#" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button">
                                View Project
                                <BsArrowRight className="button__icon" />
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content grid">
                        <img src="" alt="Portfolio 2" className="portfolio__image" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-base font-medium">Portfolio 2</h3>
                            <p className="portfolio__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <a href="#" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button">
                                View Project
                                <BsArrowRight className="button__icon" />
                            </a>
                        </div>
                    </div>

                    <div className="portfolio__content grid">
                        <img src="" alt="Portfolio 2" className="portfolio__image" />
                        <div className="portfolio__data">
                            <h3 className="portfolio__title text-base font-medium">Portfolio 3</h3>
                            <p className="portfolio__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <a href="#" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center button--small portfolio__button">
                                View Project
                                <BsArrowRight className="button__icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortafolioSection;