import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const AboutMeCardContainer = styled.div`
  gap: 40px;

  color: white;

  padding: 40px;
  border-radius: 8px;

  background-color: #2a2838;
`;

export const AboutMeInfo = styled.div`
  flex-direction: column;
  gap: 40px;
`;

export const AboutMeImage = styled.img`
  height: 100px;
  width: 100px;

  border-radius: 50%;
`;

export const AboutMeDetails = styled.div`
  flex-direction: column;
`;

export const AboutMeName = styled.h3``;
export const AboutMeJob = styled.span``;

export const AboutMeSocialLinks = styled.div`
  gap: 10px;
`;

export const AboutMeLink = styled.a`
  &:hover {
    color: rgb(250 204 21);
    cursor: pointer;
  }
`;

export const AboutMeLinkIcon = styled(FontAwesomeIcon)``;
