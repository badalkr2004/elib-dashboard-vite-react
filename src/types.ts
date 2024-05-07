export interface Author {
    _id: string;
    name: string;
}

export interface Book {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    genre: string;
    author: Author;
    createdAt: string;
}