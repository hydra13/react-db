import React, { Component } from 'react';
import { connect } from 'react-redux'

import Post from './Post';
import { fetchPosts } from '../actions/postsActions';

class PostsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.posts) {
            return null;
        }
        const posts = this.props.posts.map(post => {
            return <Post key={post.id} {...post} />
        })
        return (
            <div>
                <h1>Посты</h1>
                {this.props.fetching && <h3>Loading...</h3>}
                {!this.props.fetching && posts}
            </div>
        )
    }
    componentDidMount() {
        if (this.props.posts && 
            this.props.posts.length === 0) {
                this.props.dispatch(fetchPosts());
        }
    }

}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts,
        fetching: state.posts.fetching
    }
}

export default connect(mapStateToProps)(PostsList);