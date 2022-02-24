import 'babel-polyfill'
import React from "react";
import App from './components/pages/App';
import Dashboard from "./components/pages/Dashboard";

export default [
    {
        path: '/',
        component: App,
        exact: true,
    },
    {
        path: '/dashboard',
        component: Dashboard,
        exact: true
    },

]

