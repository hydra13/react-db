import React from 'react';
import CommentsList from '../components/CommentsList';

const Comments = props => {
    return (
        <div>
            {
                (!props.children) ?
                    (<CommentsList />)
                    :
                    (props.children)
            }
        </div>
    )
}
export default Comments;