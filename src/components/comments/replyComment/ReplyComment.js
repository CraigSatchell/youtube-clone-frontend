import React from 'react';
import './ReplyComment.css';

const ReplyComment = (props) => {
    return (
        <div className='reply-comment'>
         <div className="add-comment">
            <form onSubmit={
               (event) => {
                  props.handleNewReplySubmit(event) 
               }
            }>
               <input type='text' name='reply'
                  onChange={props.handleNewReplyChange}
                  value={props.newReply}
                  placeholder='Add a public reply...'></input>
            </form>
         </div>
        </div>
    )
}

export default ReplyComment
