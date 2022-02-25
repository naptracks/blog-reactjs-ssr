import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import Routes from './Routes';
import {renderRoutes} from "react-router-config";
import reducers from './reducers'
import {Auth0Provider} from "@auth0/auth0-react";

// createStore(<reducer> | <preloadedState> | <middleware>)
const store = createStore(reducers, {}, applyMiddleware(thunk))


// use of hydrate for SSR
// Auth0 Provider for Google auth
// Redux Provider from
ReactDOM.hydrate(
    <React.StrictMode>
        <Auth0Provider
            domain={'dev-8ctnv075.eu.auth0.com'}
            clientId={'iNQycfejhx9IB6VFbq2SgLSnzQ4j4t3e'}
            redirectUri={window.location.origin}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <div>{renderRoutes(Routes)}</div>
                </BrowserRouter>
            </Provider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
