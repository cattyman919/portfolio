
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
  gallery: string[];
}

export interface GalleryItemProps {
  sourceUrl: string;
  caption?: string;
}

export interface GalleryProps {
  gallery: GalleryItemProps[];
  projectName: string; // For alt text
}

export interface CreditPersonProps {
  name: string;
  github?: string;
  linkedin?: string;
}
