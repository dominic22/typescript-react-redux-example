
export interface Author {
    name: string;
    avatarUrl: string;
}

export interface CommentProps {
    author: Author;
    text: string;
    date: Date;
}