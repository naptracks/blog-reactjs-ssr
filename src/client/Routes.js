import 'babel-polyfill'
import React from "react";
import {Route} from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Posts from "./components/Posts";
import {loadData} from "./components/Posts";

export default [
    {
        path: '/',
        component: App,
        exact: true,
    },
    {
        loadData,
        path: '/posts',
        component: Posts
    }
]