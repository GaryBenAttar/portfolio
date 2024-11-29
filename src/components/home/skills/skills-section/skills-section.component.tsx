import React from "react";

import {
  SkillsSectionContainer,
  SkillsSectionHeading,
} from "./skills-section.styles";

import { SkillsSectionProps } from "../skills.interfaces";
import SkillsCard from "./skills-card/skills-card.component";

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsSection }) => {
  return (
    <SkillsSectionContainer>
      <SkillsSectionHeading>{skillsSection.title}</SkillsSectionHeading>
      {skillsSection.categories.map((category) => (
        <SkillsCard category={category} key={category.name} />
      ))}
    </SkillsSectionContainer>
  );
};

export default SkillsSection;
