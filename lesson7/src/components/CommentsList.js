import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comment from './Comment';
import { fetchComments } from '../actions/commentsActions';

class CommentsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.comments) {
            return null;
        }
        const comments = this.props.comments.map(comment => {
            return <Comment key={comment.id} {...comment} />
        })
        return (
            <div>
                <h1>Комментарии</h1>
                {this.props.fetching && <h3>Loading...</h3>}
                {!this.props.fetching && comments}
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
        fetching: state.comments.fetching
    }
}

export default connect(mapStateToProps)(CommentsList);