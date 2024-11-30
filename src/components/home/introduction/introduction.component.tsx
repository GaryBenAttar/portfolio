import {
  IntroductionContainer,
  IntroductionImage,
  IntroductionSummary,
  IntroductionSummaryParagraph,
  IntroductionSummarySpan,
} from "./introduction.styles";

const Introduction = () => {
  return (
    <IntroductionContainer id="#home">
      <IntroductionSummary>
        <IntroductionSummarySpan>
          👋 Hey, I'm Gary Ben Attar
        </IntroductionSummarySpan>
        <IntroductionSummaryParagraph>
          As a passionate fullstack developer, I specialize in creating seamless
          web applications that enhance user experiences and drive business
          success. With expertise in both frontend and backend technologies, I
          bring a unique blend of creativity and technical proficiency, ensuring
          efficient, scalable solutions that meet diverse client needs and
          exceed expectations.
        </IntroductionSummaryParagraph>
      </IntroductionSummary>
      <IntroductionImage
        alt="Gary"
        src="https://i.ibb.co/60d5YGS/logo-panda.png"
      />
    </IntroductionContainer>
  );
};

export default Introduction;
