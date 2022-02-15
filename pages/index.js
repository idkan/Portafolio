import Layout from "../components/Layout";

import { FiLinkedin, FiGithub, FiInstagram, FiSend } from "react-icons/fi";
import { BsMouse, BsArrowDown } from "react-icons/bs";

const Home = () => {
	return (
		<Layout>
			<section id="home" className="pt-8 px-4 pb-16">
				<div className="max-w-5xl mx-auto grip gap-4">
					<div className="grid grid-cols-home-content pt-14 items-center mb-4">
						<div className="grid grid-cols-home-social gap-y-4">
							<a href="https://www.linkedin.com/in/abraham-serena/" target="_blank" rel="noopener noreferrer" className="text-xl text-primary hover:text-black"><FiLinkedin className="text-xl" /></a>
							<a href="https://github.com/idkan/" target="_blank" rel="noopener noreferrer" className="text-xl text-primary hover:text-black"><FiGithub className="text-xl" /></a>
							<a href="https://www.instagram.com/abraham_salk/" target="_blank" rel="noopener noreferrer" className="text-xl text-primary hover:text-black"><FiInstagram className="text-xl" /></a>
						</div>
						<div className="">
							<svg viewBox="0 0 200 187" className="w-52 fill-primary">
								<mask id="mask0" mask-type="alpha">
									<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
								</mask>
								<g mask="url(#mask0)">
									<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
									<image className="w-44" href="./profile.png" x="12" y="18" height="200" width="200" />
								</g>
							</svg>
						</div>
						<div className="col-span-1/3">
							<h1 className="text-3xl font-bold" >Hi, I'm Abraham!</h1>
							<h3 className="text-xl font-light text-gray-500 mb-3">I'm a Software Engineer</h3>
							<p className="text-base mb-8">I'm a full stack developer with a passion for building web applications. I have a strong background in web development and have worked with a wide range of technologies.</p>
							<a href="#contact" className="flex items-center text-secondary">Let's talk <FiSend className="ml-1" /></a>
						</div>
					</div>
					<div className="text-secondary">
						<a href="#about" className="flex items-center text-primary duration-300 hover:translate-y-1">
							<BsMouse className="text-3xl mr-1" />
							<span className="text-sm font-medium mr-1">Scroll down</span>
							<BsArrowDown className="text-xl" />
						</a>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Home;