export interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    description: string;
    requirements: string[];
}

export interface SearchQuery {
    jobTitle: string;
    department: string;
    location: string;
}
