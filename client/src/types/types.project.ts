export interface project {
  title: string;
  description: string;
  shot: {
    url: string;
  };
  preview_link: string;
  code_link: string;
  state: number;
  tags?: string[] | string;
  frameworks?: string[];
}