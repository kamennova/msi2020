import { replace } from "../utils";
import {
    JokeAction,
    SET_CATEGORIES,
    SET_JOKES,
    SET_PAGE,
    SetJokesAction,
    SetPageAction,
    TOGGLE_FAVOURITE
} from "./actions";
import { StateShape } from "./StoreState";

export const jokes = (state: StateShape, action: JokeAction): StateShape => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            return toggleFavouriteReducer(state, action.id);
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

const setJokesReducer = (state: StateShape, action: SetJokesAction): StateShape => ({
    ...state,
    results: action.jokes,
    jokes: action.jokes.slice(0, state.pagination.itemsPerPage),
    pagination: {
        ...state.pagination,
        currentIndex: 0,
        totalCount: Math.ceil(action.jokes.length / state.pagination.itemsPerPage),
    }
});

const setPageReducer = (state: StateShape, action: SetPageAction): StateShape => ({
    ...state,
    jokes: state.results.slice(state.pagination.itemsPerPage * action.index,
        state.pagination.itemsPerPage * (action.index + 1)),
    pagination: {
        ...state.pagination,
        currentIndex: action.index,
    },
});

const toggleFavouriteReducer = (state: StateShape, id: string): StateShape => {
    const joke = state.favourites.find(item => item.id === id) ||
        state.jokes.find(item => item.id === id);

    if (joke === undefined) {
        throw new Error('Joke not found');
    }

    const updJoke = { ...joke, isFavourite: !joke.isFavourite };
    const favourites = updJoke.isFavourite ? [...state.favourites, updJoke] :
        state.favourites.filter(fav => fav.id !== id);
    const results = replace(state.results, joke, updJoke);
    const jokes = replace(state.jokes, joke, updJoke);

    return { ...state, favourites, jokes, results };
};
