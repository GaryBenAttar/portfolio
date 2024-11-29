import styled from "styled-components";

export const PersonalProjectsContainer = styled.div`
  flex-direction: column;
  gap: 20px;
`;

export const PersonalProjectsHeading = styled.h3``;

export const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
