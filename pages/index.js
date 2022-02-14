import Layout from "../components/Layout";

import { FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

const Home = () => {
	return (
		<Layout>
			<h1 className="text-3xl font-bold text-secondary">
				Main Content
			</h1>
			<section id="home" className="pt-8 px-0 pb-16">
				<div className="max-w-5xl mx-auto grip">
					<div className="grid">
						<div className="home__social">
							<a href="https://www.linkedin.com/in/abraham-serena/" target="_blank" rel="noopener noreferrer"><FiLinkedin className="text-3xl" /></a>
							<a href="https://github.com/idkan" target="_blank" rel="noopener noreferrer"><FiGithub className="text-3xl" /></a>
						</div>
						<div className="home__img">
							<svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
								<mask id="mask0" mask-type="alpha">
									<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
								</mask>
								<g mask="url(#mask0)">
									<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
									<image className='img-circle' href="./profile.png" x='0' y="0" height="200" width="200" />
								</g>
							</svg>
						</div>
						<div className="home__data">
							<h1 className="">Hi, I'm Abraham</h1>
							<h3 className="">I'm a Software Engineer - Full Stack Developer</h3>
							<p className="">
								I'm a full stack developer with a passion for building web applications. I have a strong background in web development and have worked with a wide range of technologies.
							</p>
							<a href="#contact" className="">
								<FiSend className="" />Let's talk
							</a>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Home;