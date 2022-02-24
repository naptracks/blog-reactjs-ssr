import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Aux from "../../utils/Aux";

const Layout = (props) => {

    return (
        <Aux>
            <Navbar/>
            {props.children}
            <Footer/>
        </Aux>
    )
};

export default Layout