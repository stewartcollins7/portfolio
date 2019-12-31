export interface Project {
    name: string;
    screenshot: string | null;
    description: string;
    role: string;
    tools: string[];
    languages: string[];
    github: string | null;
}