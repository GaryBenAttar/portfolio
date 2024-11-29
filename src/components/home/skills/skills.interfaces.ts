export interface Category {
  name: string;
  skills: string[];
}

export interface SkillsSection {
  title: string;
  categories: Category[];
}

export interface SkillsSectionProps {
  skillsSection: SkillsSection;
}

export interface SkillsCardProps {
  category: Category;
}
