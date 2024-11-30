import SkillsSection from "./skills-section/skills-section.component";
import { SkillsContainer } from "./skills.styles";

const skillsList = [
  {
    title: "Frontend",
    categories: [
      {
        name: "Basics",
        skills: ["HTML5", "CSS  ", "Javascript", "Typescript"],
      },
      { name: "Frameworks", skills: ["React JS", "Next JS"] },
      { name: "Styles", skills: ["SASS", "Styled Components", "Tailwind CSS"] },
    ],
  },
  {
    title: "Backend",
    categories: [
      { name: "Technologies", skills: ["Node JS", "Express JS"] },
      { name: "Authentication", skills: ["OAuth", "Firebase"] },
    ],
  },
  {
    title: "Databases",
    categories: [
      { name: "SQL", skills: ["PostgreSQL"] },
      { name: "NoSQL", skills: ["MongoDB", "Firestore"] },
    ],
  },
  {
    title: "DevOps",
    categories: [
      { name: "Infrastructure", skills: ["Github"] },
      { name: "Virtualization", skills: ["Oracle Vitual Box"] },
    ],
  },
];

const Skills = () => {
  return (
    <SkillsContainer>
      {skillsList.map((skillSection) => (
        <SkillsSection skillsSection={skillSection} key={skillSection.title} />
      ))}
    </SkillsContainer>
  );
};

export default Skills;
