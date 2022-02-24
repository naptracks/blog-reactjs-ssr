import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const App = ({isAuthenticated}) => {
    if (isAuthenticated) {
        return <Redirect to='/'/>;
    }

    return (
        <div>

        </div>
    );
};

App.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
