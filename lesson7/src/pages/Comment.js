import React, { Component } from 'react';
import { connect } from 'react-redux'

import CommentComponent from '../components/Comment';
import { fetchComments } from '../actions/commentsActions';

class Comment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.comments) {
            return null;
        }
        const commentId = +this.props.match.params.commentId; // convert str to num !!!
        const comment = this.props.comments.find(comment => commentId === comment.id)
        return (
            <div>
                {comment && <CommentComponent {...comment} />}
            </div>
        )
    }
    componentDidMount() {
        if (this.props.comments && 
            this.props.comments.length === 0) {
            this.props.dispatch(fetchComments());
        }
    }

}

function mapStateToProps(state) {
    return {
        comments: state.comments.comments,
    }
}

export default connect(mapStateToProps)(Comment);
