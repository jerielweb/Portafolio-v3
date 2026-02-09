export interface Media {
  id: number;
  name: string;
  url: string;
  mime: string;
}

export interface Skill {
  id: number;
  Name: string;
  url?: string;
  Logo: Media;
}

export type SkillsList = Skill[];
