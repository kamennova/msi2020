import { Joke } from "../types";

export const TOGGLE_FAVOURITE = 'Toggle_fav',
    SET_CATEGORIES = 'Set_categories',
    SET_JOKES = 'Set_jokes',
    SET_PAGE = 'Set_page';

export type SetCategoriesAction = {
    type: typeof SET_CATEGORIES,
    categories: string[],
};

export type SetJokesAction = {
    type: typeof SET_JOKES,
    jokes: Joke[],
};

export type SetPageAction = {
    type: typeof SET_PAGE,
    index: number,
};

export type ToggleFavouriteAction = {
    type: typeof TOGGLE_FAVOURITE,
    id: string,
}

export const setCategories = (categories: string[]): SetCategoriesAction => ({ type: SET_CATEGORIES, categories }),
    setJokes = (jokes: Joke[]): SetJokesAction => ({ type: SET_JOKES, jokes }),
    toggleIsFavourite = (id: string): ToggleFavouriteAction => ({ type: TOGGLE_FAVOURITE, id }),
    setPage = (index: number): SetPageAction => ({ type: SET_PAGE, index });

export type JokeAction = ToggleFavouriteAction | SetCategoriesAction | SetJokesAction | SetPageAction;
