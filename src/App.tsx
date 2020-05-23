import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Home } from "./components/Home";
import store from "./store/store";

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
