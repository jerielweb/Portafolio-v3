export interface Project {
  title: string;
  description: string;
  shot: { url: string };
  preview_link: string;
  code_link: string;
  state: number;
  technologies: Array<{
    id: number;
    React?: string;
    Tailwind?: string;
    Astro?: string;
    Next?: string;
    TypeScript?: string;
    JacaScript?: string;
    CSS?: string;
    Vite?: string;
    HTML?: string;
  }>;
}
