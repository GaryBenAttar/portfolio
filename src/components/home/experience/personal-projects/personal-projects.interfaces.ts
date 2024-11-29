export interface Project {
  date: string;
  name: string;
  description: string;
  gridArea: string;
}

export interface ProjectsList {
  project: Project[];
}

export interface PersonalProjectsCardProps {
  projectsList: ProjectsList[];
}
