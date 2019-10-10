import React, { Component } from 'react';
import Post from './Post';

// TODO: Сделать определения имени пользователя для постов

export default class PostsList extends Component {
    render() {
        if (!this.props.posts.length) {
            return null;
        }
        const posts = this.props.posts.map((post, idx) => {
            return <Post key={idx} {...post} />
        })
        return (
            <>
                <h1>Посты</h1>
                {posts}
            </>
        )
    }
}
