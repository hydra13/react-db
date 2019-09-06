import React from 'react';
import PropTypes from 'prop-types'

import Post from './Post';

import './Blog.scss';

class Blog extends React.Component {
    render() {
        const postsElements = this.props.posts.map(post => {
            return <Post key={post.title + post.created} {...post} />;
        })
        return (
            <div>
                {postsElements}
            </div>
        )
    }
}

Blog.defaultProps = {
    posts: []
}

Blog.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Blog;