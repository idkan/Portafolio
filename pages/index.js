import { useState } from "react";

import Layout from "../components/Layout";

import { FiLinkedin, FiGithub, FiInstagram, FiSend, FiDownload, FiChevronDown, FiServer } from "react-icons/fi";
import { BsMouse, BsArrowDown, BsBraces } from "react-icons/bs";

const Home = () => {

	const [isFrontOpen, setIsFrontOpen] = useState(true);

	return (
		<Layout>
			<section className="home section" id="home">
				<div className="home__container container grid gap-4">
					<div className="home__content grid gap-6 grid-cols-[.5fr_3fr] pt-14 items-center">
						<div className="home__social grid grid-cols-[max-content] gap-y-4">
							<a href="https://www.linkedin.com/in/abraham-serena/" className="home__social-icon text-lg text-primary hover:text-primary-alt" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-xl inline-block" /></a>
							<a href="https://github.com/idkan/" target="_blank" className="home__social-icon text-lg text-primary hover:text-primary-alt" target="_blank" rel="noopener noreferrer"><FiGithub className="text-xl inline-block" /></a>
							<a href="https://www.instagram.com/abraham_salk/" className="home__social-icon text-lg text-primary hover:text-primary-alt" target="_blank" rel="noopener noreferrer"><FiInstagram className="text-xl inline-block" /></a>
						</div>
						<div className="home__img">
							<svg className="home__blob w-52 fill-primary" viewBox="0 0 200 187">
								<mask id="mask0" mask-type="alpha">
									<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
								</mask>
								<g mask="url(#mask0)">
									<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
									<image className="home__blob-img w-48" x="12" y="18" href="./assets/images/profile.png" />
								</g>
							</svg>
						</div>
						<div className="home__data col-span-1/3">
							<h1 className="home__title text-3xl">Hi, I'm Abraham</h1>
							<h3 className="home__subtitle text-xl text-text font-medium mb-3">Software Engineer</h3>
							<p className="home__description mb-8">
								FullStack Developer based in M&eacute;xico. I'm passionate about building's software and I'm always looking for new challenges.
								Highly motivated and always ready to learn new things.
							</p>
							<a href="#contact" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center">
								Let's Talk <FiSend className="button__icon inline-block text-xl ml-2 duration-300" />
							</a>
						</div>
					</div>
					<div className="home__scroll">
						<a href="#about" className="home__scroll-button text-primary duration-300 hover:translate-y-1 button--flex inline-flex items-center">
							<BsMouse className="home__scroll-mouse text-3xl" />
							<span className="home__scroll-name text-sm text-title font-medium mr-1">Scroll Down</span>
							<BsArrowDown className="home__scroll-arrow text-lg" />
						</a>
					</div>
				</div>
			</section>

			<section className="about section" id="about">
				<h2 className="section__title">About Me</h2>
				<span className="section__subtitle">My Introduction</span>
				<div className="about__container container grid gap-6">
					<img src="./assets/images/about.png" alt="About Me" className="about__img w-52 rounded-lg justify-self-center self-center" />
					<div className="about__data">
						<p className="about__description text-center mb-10">
							Software Engineer with a background in Web Development. I enjoy creating clean and efficient code. I'm always looking for new challenges that will help me to improve my skills.
						</p>
						<div className="about__info flex justify-evenly mb-10">
							<div>
								<span className="about__info-title block text-center text-lg font-semibold text-title">03+</span>
								<span className="about__info-name block text-center text-tiny">Years <br /> Experience</span>
							</div>
							<div>
								<span className="about__info-title block text-center text-lg font-semibold text-title">10+</span>
								<span className="about__info-name block text-center text-tiny">Completed <br /> Project</span>
							</div>
							<div>
								<span className="about__info-title block text-center text-lg font-semibold text-title">02+</span>
								<span className="about__info-name block text-center text-tiny">Companies <br /> Worked</span>
							</div>
						</div>
						<div className="about__buttons flex justify-center">
							<a href="./assets/pdf/resume2022.pdf" download="Resume_AbrahamSerena_2022" className="button bg-primary text-white p-4 rounded-lg font-medium hover:bg-primary-alt button--flex inline-flex items-center">
								Download CV <FiDownload className="button__icon inline-block text-xl ml-2 duration-300" />
							</a>
						</div>
					</div>
				</div>
			</section>

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


		</Layout>
	);
}

export default Home;