import React from 'react';
import Login from "../auth/Login";
import Container from "../layout/Container";
import Layout from "../layout/Layout";


const App = () => {

    return (
        <Layout>
            <Container center>
                <Login/>
            </Container>
        </Layout>
    );
};


export default App;
