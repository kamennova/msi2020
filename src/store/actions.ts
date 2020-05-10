import { Joke } from "../types/Joke";

export const TOGGLE_FAVOURITE = 'Toggle fav',
    SET_CATEGORIES = 'Set categories',
    SET_JOKES = 'Set jokes';

export type SetCategoriesAction = {
    type: typeof SET_CATEGORIES,
    categories: string[],
};

export type SetJokesAction = {
    type: typeof SET_JOKES,
    jokes: Joke[],
};

export type ToggleFavouriteAction = {
    type: typeof TOGGLE_FAVOURITE,
    id: string,
}

export const setCategories = (categories: string[]): SetCategoriesAction => ({ type: SET_CATEGORIES, categories }),
    setJokes = (jokes: Joke[]): SetJokesAction => ({ type: SET_JOKES, jokes }),
    toggleIsFavourite = (id: string): ToggleFavouriteAction => ({ type: TOGGLE_FAVOURITE, id });

export type JokeAction = ToggleFavouriteAction | SetCategoriesAction | SetJokesAction;
