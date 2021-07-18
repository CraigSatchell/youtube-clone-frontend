import React, { useState } from 'react';
import './ListComments.css';
import CreateComment from '../createComment/CreateComment';
import ReplyComment from '../replyComment/ReplyComment';
import LikeDislikeComment from '../likeDislikeReplyComment/LikeDislikeReplyComment';



const ListComments = (props) => {

   if (props.comments) {
      //setCommentCount(props.comments.length)
   }

   return (
      <div id='list-comments'>
         <h2>{props.commentCount} Comments</h2>
         <CreateComment newComment={props.newComment} setNewComment={props.setNewComment} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} />
         <div>
            {props.comments ? props.comments.map((comment) => {
               return (<li key={comment._id}>{comment.text}<div><LikeDislikeComment />&nbsp;<button onClick={props.handleReplyCommentClick} >Reply</button></div><ReplyComment /></li>)
            }) : ''}
         </div>
      </div>
   )
}

export default ListComments
