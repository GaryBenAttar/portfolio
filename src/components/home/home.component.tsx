import AboutMe from "./about-me/about-me.component";
import Experience from "./experience/experience.component";
import { HomeContainer } from "./home.styles";
import Introduction from "./introduction/introduction.component";
import Navigation from "./navigation/navigation.component";
import Skills from "./skills/skills.component";

const Home = () => {
  return (
    <HomeContainer>
      <Navigation />
      <Introduction />
      <AboutMe />
      <Experience />
      <Skills />
    </HomeContainer>
  );
};

export default Home;
