import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getByCategory, getByFreeSearch, getCategories, getRandom } from "../API";
import { Filter, FilterOptions, Joke } from "../types";
import { setCategories, setJokes } from "./actions";
import { StateShape } from "./StoreState";

export type ThunkResult = ActionCreator<ThunkAction<Promise<Action>, StateShape, void, Action<void>>>;

export const thunkSetCategories: ThunkResult = () => async (dispatch: Dispatch) =>
    await getCategories()
        .then((categories) => dispatch(setCategories(categories)));

export const thunkGetJokes: ThunkResult = (filter: FilterOptions) => async (dispatch: Dispatch) =>
    await getJokes(filter)
        .then((jokes) => dispatch(setJokes(jokes)));

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
