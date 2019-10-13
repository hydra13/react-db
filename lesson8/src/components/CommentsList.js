import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

const CommentsList = props => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments/').then(response => {
            setComments(response.data);
        })
    }, [])
    
    const commentsForRendering = comments.map(comment => {
        return <Comment key={comment.id} {...comment} />
    })
    return (
        <div>
            <h1>Комментарии</h1>
            {commentsForRendering}
        </div>
    )
}

export default CommentsList;