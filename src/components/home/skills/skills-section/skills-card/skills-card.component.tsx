import React from "react";
import {
  SkillsCardContainer,
  SkillsCardHeading,
  SkillSpan,
  SkillsSpanContainer,
} from "./skills-card.styles";
import { SkillsCardProps } from "../../skills.interfaces";

const SkillsCard: React.FC<SkillsCardProps> = ({ category }) => {
  return (
    <SkillsCardContainer>
      <SkillsCardHeading>{category.name}</SkillsCardHeading>
      <SkillsSpanContainer>
        {category.skills.map((skill) => (
          <SkillSpan key={skill}>{skill}</SkillSpan>
        ))}
      </SkillsSpanContainer>
    </SkillsCardContainer>
  );
};

export default SkillsCard;
