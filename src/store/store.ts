import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { msiApp } from "./appReducers";
import { initialState } from "./StoreState";

const LocalStorageKey = 'ChuckNorrisJokesState';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LocalStorageKey);

        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.log('Could not load local storage state', err);

        return undefined;
    }
};

const saveState = (state: { [key: string]: any }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LocalStorageKey, serializedState);
    } catch (err) {
        console.log('Could not save state', err);
    }
};

const store = createStore(msiApp, { ...initialState, ...loadState() }, applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        favourites: store.getState().favourites,
    });
});

export default store;
