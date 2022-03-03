import Layout from "../components/Layout";

import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import JourneySection from "../components/sections/JourneySection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ProjectInMind from "../components/sections/ProjectInMind";
import ContactMe from "../components/sections/ContactMe";

const Home = () => {
	return (
		<Layout>
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<JourneySection />
			<PortfolioSection />
			<ProjectInMind />
			<ContactMe />
		</Layout>
	);
}

export default Home;