import { Joke } from "../types";
import { replace } from "../utils";
import {
    JokeAction,
    SET_CATEGORIES,
    SET_JOKES,
    SET_PAGE,
    SetJokesAction,
    SetPageAction,
    TOGGLE_FAVOURITE, ToggleFavouriteAction
} from "./actions";
import { StateShape } from "./StoreState";

export const jokes = (state: StateShape, action: JokeAction): StateShape => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            return toggleFavouriteReducer(state, action);
        case SET_CATEGORIES:
            return { ...state, categories: action.categories };
        case SET_JOKES:
            return setJokesReducer(state, action);
        case SET_PAGE:
            return setPageReducer(state, action);
        default:
            return state;
    }
};

const setJokesReducer = (state: StateShape, action: SetJokesAction): StateShape => {
    const results = action.jokes.map(joke => ({
        ...joke, isFavourite: state.favourites.some(item => item.id === joke.id)
    }));

    return {
        ...state,
        results,
        jokes: results.slice(0, state.pagination.itemsPerPage),
        pagination: {
            ...state.pagination,
            currentIndex: 0,
            totalCount: Math.ceil(action.jokes.length / state.pagination.itemsPerPage),
        }
    };
};

const getPageItems = (results: Joke[], itemsCount: number, pageIndex: number): Joke[] =>
    results.slice(itemsCount * pageIndex, itemsCount * (pageIndex + 1));

const setPageReducer = (state: StateShape, action: SetPageAction): StateShape => ({
    ...state,
    jokes: getPageItems(state.results, state.pagination.itemsPerPage, action.index),
    pagination: {
        ...state.pagination,
        currentIndex: action.index,
    },
});

const toggleFavouriteReducer = (state: StateShape, action: ToggleFavouriteAction): StateShape => {
    const joke = state.favourites.find(item => item.id === action.id) ||
        state.jokes.find(item => item.id === action.id);

    if (joke === undefined) {
        throw new Error('Joke not found');
    }

    const updJoke = { ...joke, isFavourite: !joke.isFavourite };
    const favourites = updJoke.isFavourite ? [...state.favourites, updJoke] :
        state.favourites.filter(fav => fav.id !== action.id);
    const results = replace(state.results, joke, updJoke);
    const jokes = getPageItems(results, state.pagination.itemsPerPage, state.pagination.currentIndex);

    return { ...state, favourites, jokes, results };
};
