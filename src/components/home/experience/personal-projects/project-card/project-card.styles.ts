import styled from "styled-components";

interface ProjectCardContainerProps {
  $gridArea: string;
}

export const ProjectCardContainer = styled.div<ProjectCardContainerProps>`
  grid-area: ${(props) => props.$gridArea};

  flex-direction: column;
  gap: 20px;
  padding: 10px;
  border: solid;
  border-radius: 8px;
`;
export const ProjectCardDate = styled.span`
  font-size: 0.8rem;
`;
export const ProjectCardTitle = styled.h3`
  font-size: 1.3rem;
  color: rgb(250 204 21);
`;
export const ProjectCardDescription = styled.p``;
