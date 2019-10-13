import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const PostsList = props => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/').then(response => {
            setPosts(response.data);
        })
    },[])

    const postsForRendering = posts.map(post => {
        return <Post key={post.id} {...post} />
    })
    return (
        <div>
            <h1>Посты</h1>
            {postsForRendering}
        </div>
    )
}
export default PostsList;