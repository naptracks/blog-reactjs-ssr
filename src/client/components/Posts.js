import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/post';

const Posts = ({ getPosts, post: { posts } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    console.log(posts)

    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
