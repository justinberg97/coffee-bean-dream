export interface Coffee {
    id: number,
    name: string;
    roaster: string;
    date: string;
    location: string;
    origin: string;
    rating?: number;
    review?: string;
    image: string
}