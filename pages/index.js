import Layout from "../components/Layout";

import HomeSection from "../components/sections/HomeSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";

const Home = () => {
	return (
		<Layout>
			<HomeSection />
			<AboutSection />
			<SkillsSection />
		</Layout>
	);
}

export default Home;