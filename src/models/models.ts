export interface Client {
  name: string;
  projects: {
    name: string;
    description: string;
    images?: string[];
    link?: string;
  }[];
  isOpen?: boolean;
}
