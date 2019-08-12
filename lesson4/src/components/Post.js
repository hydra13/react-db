import React from 'react';
import PropTypes from 'prop-types'
import './Post.scss';

class Post extends React.Component {
    render() {
        const { title, postBody, created, author } = this.props;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{title}</strong>
                                <br />
                                {postBody}
                                <br />
                                <small>{created} by <a href="#">{author}</a></small>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

Post.defaultProps = {
    title: 'Post',
    postBody: 'Example of the post',
    created: new Date().toDateString(),
    author: 'System'
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired
}

export default Post;