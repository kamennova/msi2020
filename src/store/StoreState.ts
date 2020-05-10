import { Joke } from "../types/Joke";

export type StateShape = {
    favourites: Joke[],
    results: Joke[],
    categories: string[],
};

export const initialState: StateShape = {
    favourites: [],
    results: [],
    categories: [],
};
