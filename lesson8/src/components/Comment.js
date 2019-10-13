import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Comment = props => {
    const { id, name, email, body, postId } = props;
    
    return (
        <div className="card border-secondary mb-3">
            <div className="card-header">
                <Link to={`/comments/${id}`}>
                    {name}
                </Link>
            </div>
            <div className="card-body text-secondare">
                <p>{body}</p>
                <p>{email}</p>
                <Link to={`/posts/${postId}`}>
                    Открыть исходный пост
                </Link>
            </div>
        </div>
    )
}

export default Comment