import React from 'react';
import PropTypes from 'prop-types'
import './Post.scss';

class Post extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

Post.defaultProps = {
    title: 'Post'
}

Post.propTypes = {
    title: PropTypes.string.isRequired
}

export default Post;