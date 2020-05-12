import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import './App.css';
import { Home } from "./components/Home";
import { msiApp } from "./store/appReducers";

const store = createStore(msiApp, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <div className="site-container">
                <Home/>
            </div>
        </Provider>
    );
};

export default App;
