import { replace } from "../utils";
import { JokeAction, SET_CATEGORIES, SET_JOKES, TOGGLE_FAVOURITE } from "./actions";
import { StateShape } from "./StoreState";

export const jokes = (state: StateShape, action: JokeAction): StateShape => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            return toggleFav(state, action.id);
        case SET_CATEGORIES:
            return { ...state, categories: action.categories };
        case SET_JOKES:
            return { ...state, results: action.jokes };
        default:
            return state;
    }
};

const toggleFav = (state: StateShape, id: string): StateShape => {
    const joke = state.favourites.find(item => item.id === id) || state.results.find(item => item.id === id);

    if (joke === undefined) {
        throw new Error('Joke not found');
    }

    const updJoke = { ...joke, isFavourite: !joke.isFavourite };
    const favourites = updJoke.isFavourite ? [...state.favourites, updJoke] :
        state.favourites.filter(fav => fav.id !== id);
    const results = replace(state.results, joke, updJoke);

    return { ...state, favourites, results };
};
