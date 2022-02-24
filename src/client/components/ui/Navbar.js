import React from "react";

const Navbar = () => {

    const fakeLinks = ['new', 'for him', 'for her', 'home', 'gifts', 'sale', 'journal']

    return (
        <div className={'navbar-container'}>
            <div className={'navbar center'}>
                <h4>SEARCH</h4>
                <img src={'logo.png'} alt={'logo'} />
                <h4>OTHER</h4>
            </div>
                <div className={'fake-links-container center'}>
                    {
                        fakeLinks.map(fl => <h4 className="fake-link">{fl.toUpperCase()}</h4>)
                    }
                </div>
        </div>
    )
}

export default Navbar;