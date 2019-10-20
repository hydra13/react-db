import React, { Component } from 'react';
import { connect } from 'react-redux'

import PostComponent from '../components/Post';
import { fetchPosts } from '../actions/postsActions';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.posts) {
            return null
        }
        const postId = +this.props.match.params.postId;
        const post = this.props.posts.find(post => post.id === postId);
        return (
            <div>
                {post && <PostComponent {...post} />}
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

export default connect(mapStateToProps)(Post);