import { Dispatch } from "redux";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { getByCategory, getByFreeSearch, getCategories, getRandom } from "../API";
import { Filter, FilterOptions } from "../types/Filters";
import { Joke } from "../types/Joke";
import { setCategories, setJokes } from "./actions";
import { StateShape } from "./StoreState";

export type ThunkResult = ActionCreator<ThunkAction<Promise<Action>, StateShape, void, Action<void>>>;

export const thunkSetCategories: ThunkResult = () => async (dispatch: Dispatch) => {
    return await getCategories().then((categories) => dispatch(setCategories(categories)));
};

export const thunkGetJokes: ThunkResult = (filter: FilterOptions) => async (dispatch: Dispatch, getState: () => StateShape) => {
    const jokes = await getJokes(filter);
    const state = getState();

    return dispatch(setJokes(jokes.map(joke => ({
        ...joke, isFavourite: state.favourites.some(item => item.id === joke.id)
    }))))
};

const getJokes = async (filter: FilterOptions): Promise<Joke[]> => {
    switch (filter.type) {
        case Filter.Random:
            return [await getRandom()];
        case Filter.Search:
            return await getByFreeSearch(filter.query);
        case Filter.Categories:
            return [await getByCategory(filter.category)];
    }
};
