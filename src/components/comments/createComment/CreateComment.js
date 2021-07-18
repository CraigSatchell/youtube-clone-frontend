import React from 'react';
import './CreateComment.css';

const CreateComment = (props) => {
// handle new comment submit


   return (
      <div className='create-comment'>
         <div className="add-comment">
            <form onSubmit={
               (event) => {
                  props.handleNewCommentSubmit(event)
               }
            }>
               <input type='text' name='comment'
                  onChange={props.handleNewCommentChange}
                  value={props.newComment}
                  placeholder='Add a public comment...'></input>
            </form>
         </div>
      </div>
   )
}

export default CreateComment
