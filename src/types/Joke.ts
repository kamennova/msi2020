export type Joke = {
    id: string,
    content: string,
    isFavourite: boolean,
    url: string,
    hoursSinceUpdate: number,
    category?: string,
};
