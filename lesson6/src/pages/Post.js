import React, { Component } from 'react';
import axios from 'axios';
import PostComponent from '../components/Post';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }
    render() {
        return (
            <div>
                {this.state.post && <PostComponent {...this.state.post} />}
            </div>
        )
    }
    componentDidMount() {
        console.dir(this.props)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
            .then(response => {
                this.setState({ post: response.data })
            })
    }

}
