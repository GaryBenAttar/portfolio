import React from "react";
import { ProjectTechCardProps } from "./project-tech-card.interfaces";
import {
  ProjectTechCardContainer,
  ProjectTechCardSpan,
} from "./project-tech-card.styles";

const ProjectTechCard: React.FC<ProjectTechCardProps> = ({ tech }) => {
  return (
    <ProjectTechCardContainer>
      <ProjectTechCardSpan>{tech.name}</ProjectTechCardSpan>
    </ProjectTechCardContainer>
  );
};

export default ProjectTechCard;
