import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentComponent from '../components/Comment';

const Comment = props => {
    console.log(props)
    const [comment, setComment] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${props.match.params.commentId}`)
        .then(response => {
            setComment(response.data);
        })
    }, [])

    return (
        <div>
            {comment && <CommentComponent {...comment} />}
        </div>
    )
}
export default Comment;