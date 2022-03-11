import React from 'react';
import Login from "../auth/Login";
import Layout from "../layout/Layout";

// App.js is the home page
// route = '/'
// You can log in with Auth0 connection (Google, Facebook)

const App = () => {

    return (
        <Layout>
                <Login/>
        </Layout>
    );
};




export default App;
