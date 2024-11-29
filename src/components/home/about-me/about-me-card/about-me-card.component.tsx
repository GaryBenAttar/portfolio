import {
  AboutMeCardContainer,
  AboutMeDetails,
  AboutMeImage,
  AboutMeInfo,
  AboutMeJob,
  AboutMeLink,
  AboutMeName,
  AboutMeSocialLinks,
} from "./about-me-card.styles";

import AboutMePhoto from "../../../../assets/gary-photo.png";

const AboutMeCard = () => {
  return (
    <AboutMeCardContainer>
      <AboutMeImage alt="about-me" src={AboutMePhoto} />
      <AboutMeInfo>
        <AboutMeDetails>
          <AboutMeName>Gary Ben Attar</AboutMeName>
          <AboutMeJob>Full Stack Developer</AboutMeJob>
        </AboutMeDetails>
        <AboutMeSocialLinks>
          <AboutMeLink>Github</AboutMeLink>
          <AboutMeLink>linkedin</AboutMeLink>
        </AboutMeSocialLinks>
      </AboutMeInfo>
    </AboutMeCardContainer>
  );
};

export default AboutMeCard;
