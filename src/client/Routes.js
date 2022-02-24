import 'babel-polyfill'
import React from "react";
import {Route} from 'react-router-dom';
import App from './components/App';
import Posts from "./components/Posts";

export default [
    {
        path: '/',
        component: App,
        exact: true,
    },
    {
        path: '/posts',
        component: Posts
    }
]

