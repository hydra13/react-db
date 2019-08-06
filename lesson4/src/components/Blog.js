import React from 'react';
import PropTypes from 'prop-types'
import './Blog.scss';

class Blog extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

Blog.defaultProps = {
    title: 'Blog'
}

Blog.propTypes = {
    title: PropTypes.string.isRequired
}

export default Blog;