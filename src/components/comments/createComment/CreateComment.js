import React from 'react';
import './CreateComment.css';

const CreateComment = (props) => {
   return (
      <div>
      <div id="comment-bar">
         <form onSubmit={
            (event) => {
               props.handleCommentSubmit(event)
            }
         }>
         <input type ='text' name='Add Comment'
            onChange={props.handleCommentChange}
            value={props.newComment}
            placeholder='Add Comment'></input>
         </form>
      </div>
      </div>
   )
}

export default CreateComment
