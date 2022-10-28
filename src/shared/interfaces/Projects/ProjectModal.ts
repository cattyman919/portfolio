import { LanguagesIcons } from '@enums/LanguagesIcons';

export interface IProjectModal {
  id?: number;
  title: string;
  description: string;
  status: string;
  languages: LanguagesIcons[];
  repo?: string;
}
