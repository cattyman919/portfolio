import { LanguangesIcons } from '@enums/LanguangesIcons';

export interface IProjectModal {
  id?: number;
  title: string;
  description: string;
  status: string;
  languages: LanguangesIcons[];
  repo?: string;
}
