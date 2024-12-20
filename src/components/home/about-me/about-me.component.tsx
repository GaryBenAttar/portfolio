import AboutMeCard from "./about-me-card/about-me-card.component";

import {
  AboutMeContainer,
  AboutMeDescription,
  AboutMeHeading,
} from "./about-me.styles";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeHeading>About Me</AboutMeHeading>
      <AboutMeDescription>
        Here you'll discover additional insights about me, my expertise, and a
        comprehensive overview of my current programming and technological
        skills.
      </AboutMeDescription>
      <AboutMeCard />
      <AboutMeDescription>
        Full Stack Developer focusing on delivering high-quality solutions. My
        expertise lies in a comprehensive range of technologies including
        FastAPI, JavaScript, TypeScript, React, Next.js, Node.js, Express,
        GraphQL, AWS, GCP and many more. With a deep understanding of these
        tools and frameworks, I excel in crafting dynamic and scalable
        full-stack applications that meet the evolving needs of modern
        businesses. Let me bring my wealth of experience and technical prowess
        to your next projects
      </AboutMeDescription>
    </AboutMeContainer>
  );
};

export default AboutMe;
