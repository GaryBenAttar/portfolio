import { ExperienceContainer, ExperienceHeading } from "./experience.styles";
import PersonalProjects from "./personal-projects/personal-projects.component";

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceHeading>Experience</ExperienceHeading>
      <PersonalProjects />
    </ExperienceContainer>
  );
};

export default Experience;
