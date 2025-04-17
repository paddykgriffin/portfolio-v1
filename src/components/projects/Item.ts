export interface Project {
    id: number;
    name: string;
    logo: string;
    tags: string[];
    thumbnail: string;
    description: string;
    showOnHome?: boolean;
  }