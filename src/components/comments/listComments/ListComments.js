import React from 'react';
import './ListComments.css';
import CreateComment from '../createComment/CreateComment';

const ListComments = (props) => {
    return (
        <div id='list-comments'>
            <h4>Comments</h4>
            <CreateComment />
        </div>
    )
}

export default ListComments
