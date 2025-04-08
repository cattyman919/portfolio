
export interface ProjectCardProps {
  id: number
  title: string;
  short_description: string;
  image: string;
  date: string;
  languages?: string[];
  github_repo?: string;
  website?: string;
}

export interface ProjectDetailedCardProps {
  detailed_description: string;
  contributions: string[];
  credits: CreditPersonProps[];
}

export interface CreditPersonProps {
  name: string;
  github?: string;
  linkedin?: string;
}
