import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import Routes from './Routes';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))

ReactDOM.hydrate(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

