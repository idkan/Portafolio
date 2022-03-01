import Layout from "../components/Layout";

import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import JourneySection from "../components/sections/JourneySection";
import PortafolioSection from "../components/sections/PortafolioSection";

const Home = () => {
	return (
		<Layout>
			<HomeSection />
			<AboutSection />
			<SkillsSection />
			<JourneySection />
			<PortafolioSection />
		</Layout>
	);
}

export default Home;