import {
  PersonalProjectsContainer,
  PersonalProjectsHeading,
  ProjectCardsContainer,
} from "./personal-projects.styles";
import ProjectCard from "./project-card/project-card.component";

const projectsList = [
  {
    id: 1,
    name: "Workout App",
    date: "10 Nov, 2024",
    description:
      "A fitness application designed to empower users in their journey toward optimal health and wellness. This robust web application leverages cutting-edge technologies to provide a seamless and engaging user experience, making it easy to create customized workout routines, log workout history, and share progress with a vibrant community.",
    technologies: [
      {
        name: "JavaScript",
        icon: "",
      },
      {
        name: "React",
        icon: "",
      },
      {
        name: "Redux",
        icon: "",
      },
      {
        name: "Firebase",
        icon: "",
      },
    ],
    github: "https://github.com/GaryBenAttar/workout-app",
    website: "",
    image: "https://i.ibb.co/3skRzzH/workout-app.png",
    gridArea: "1/1/3/4",
  },
  {
    id: 2,
    name: "Portfolio",
    date: "28 Nov, 2024",
    description: "A brief description of the project",
    github: "",
    website: "",
    image: "https://i.ibb.co/3skRzzH/workout-app.png",
    gridArea: "1/4/2/6",
  },
  {
    id: 3,
    name: "Ecommerce Platform",
    date: "15 Oct, 2024",
    description: "A brief description of the project",
    github: "",
    website: "",
    image: "https://i.ibb.co/3skRzzH/workout-app.png",
    gridArea: "2/4/3/6",
  },
];

const PersonalProjects = () => {
  return (
    <PersonalProjectsContainer id="projects">
      <PersonalProjectsHeading>Personal Projects</PersonalProjectsHeading>

      <ProjectCardsContainer>
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ProjectCardsContainer>
    </PersonalProjectsContainer>
  );
};

export default PersonalProjects;
