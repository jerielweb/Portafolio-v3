export interface Media {
  id: number;
  name: string;
  url: string;
  mime: string;
}

export interface Education {
  id: number;
  title: string;
  Instutution: string;
  age: string;
  hash: string;
  link: string;
  certificate: Media;
}

export type EducationsList = Education[];
