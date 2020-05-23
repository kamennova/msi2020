import { JokeAction } from "./actions";
import { jokes } from "./reducers";
import { initialState, StateShape } from "./StoreState";

export const msiApp = (state: StateShape = initialState, action: JokeAction ): StateShape => jokes(state, action);
