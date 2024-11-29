import {
  ProjectContainer,
  ProjectHeading,
  ProjectInfoContainer,
  ProjectLink,
  ProjectTechCardsContainer,
  ProjectViewContainer,
  ProjectViewDescription,
  ProjectViewImage,
} from "./project.styles";
import { useLocation } from "react-router-dom";
import ProjectTechCard from "./project-tech-card/project-tech-card.component";
import { Technology } from "./project-tech-card/project-tech-card.interfaces";

const Project = () => {
  const location = useLocation();
  const project = location.state;

  return (
    <ProjectContainer>
      <ProjectInfoContainer>
        <ProjectHeading>{project.name}</ProjectHeading>
        <ProjectViewDescription>{project.description}</ProjectViewDescription>
        <ProjectTechCardsContainer>
          {project.technologies.map((tech: Technology) => (
            <ProjectTechCard tech={tech} key={tech.name} />
          ))}
        </ProjectTechCardsContainer>
        <ProjectLink href={project.github}>Github &rarr;</ProjectLink>
        <ProjectLink href={project.website}>Website &rarr;</ProjectLink>
      </ProjectInfoContainer>

      <ProjectViewContainer>
        <ProjectLink href={project.website}>
          <ProjectViewImage alt="project" src={project.image} />
        </ProjectLink>
        <ProjectViewDescription>{project.description}</ProjectViewDescription>
      </ProjectViewContainer>
    </ProjectContainer>
  );
};

export default Project;
