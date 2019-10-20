import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostComponent from '../components/Post';

const Post = props => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.postId}`)
            .then(response => {
                setPost(response.data);
            })
    }, [])

    return (
        <div>
            {post && <PostComponent {...post} />}
        </div>
    )
}
export default Post;