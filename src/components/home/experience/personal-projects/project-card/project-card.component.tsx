import React from "react";
import {
  ProjectCardContainer,
  ProjectCardDate,
  ProjectCardDescription,
  ProjectCardTitle,
} from "./project-card.styles";
import { ProjectCardProps } from "./project-card.interfaces";
import { useNavigate } from "react-router-dom";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <ProjectCardContainer
      $gridArea={project.gridArea}
      onClick={() => navigate("/project", { state: project })}
    >
      <ProjectCardDate>{project.date}</ProjectCardDate>
      <ProjectCardTitle>{project.name}</ProjectCardTitle>
      <ProjectCardDescription>{project.description}</ProjectCardDescription>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
