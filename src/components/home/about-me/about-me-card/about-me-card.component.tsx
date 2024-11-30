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

const AboutMeCard = () => {
  return (
    <AboutMeCardContainer>
      <AboutMeImage
        alt="about-me"
        src="https://i.ibb.co/ZTLrtWP/logo-panda.png"
      />
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
