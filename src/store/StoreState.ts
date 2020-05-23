import { Joke } from "../types/Joke";

const DefaultItemsPerPage = 50;

export type Pagination = {
    currentIndex: number,
    totalCount: number,
    itemsPerPage: number,
};

export type StateShape = {
    jokes: Joke[],
    favourites: Joke[],
    results: Joke[],
    pagination: Pagination,
    categories: string[],
};

export const initialState: StateShape = {
    favourites: [],
    results: [],
    jokes: [],
    pagination: {
        currentIndex: 0,
        totalCount: 1,
        itemsPerPage: DefaultItemsPerPage,
    },
    categories: [],
};
