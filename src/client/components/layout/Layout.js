import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Layout = (props) => {

    return (
        <>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
};

export default Layout