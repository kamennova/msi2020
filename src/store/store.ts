import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { msiApp } from "./appReducers";
import { StateShape } from "./StoreState";

const LocalStorageKey = 'ChuckNorrisJokesState';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(LocalStorageKey);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state: StateShape) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(LocalStorageKey, serializedState);
    } catch {
        // ignore write errors
    }
};

const persistedState = loadState();
const store = createStore(msiApp, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState({
        ...store.getState(),
    });
});

export default store;
