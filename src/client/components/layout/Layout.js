import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Aux from "../../utils/Aux";
import Container from "../layout/Container";


// Layout.jst provides a navbar and a main container
// Container<props: center>

const Layout = (props) => {

    return (
        <Aux>
            <Navbar/>
            <Container center>
            {props.children}
            </Container>
            <Footer/>
        </Aux>
    )
};

export default Layout