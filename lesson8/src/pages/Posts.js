import React from 'react';
import PostsList from '../components/PostsList';


const Posts = props => {
    return (
        <div>
            {
                (!props.children) ?
                    (<PostsList />)
                    :
                    (props.children)
            }
        </div>
    )
}
export default Posts;