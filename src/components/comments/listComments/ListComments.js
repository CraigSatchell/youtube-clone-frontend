import React, { useState } from 'react';
import './ListComments.css';
import CreateComment from '../createComment/CreateComment';
import ReplyComment from '../replyComment/ReplyComment';
import LikeDislikeComment from '../likeDislikeComment/LikeDislikeComment';



const ListComments = (props) => {
   const [commentCount, setCommentCount] = useState(0)
   const [showReplyComment, setShowReplyComment] = useState(false);

   // newComment={newComment} setNewComment={setNewComment} newReply={newReply} setNewReply={setNewReply} comments={comments} setComments={setComments} replies={replies} setReplies={setReplies}

   // const listComments = props.comments.map((comment) => {
   //    return (<li>{comment.text}</li>)
   // })

   return (
      <div id='list-comments'>
         <h2>{commentCount} Comments</h2>
         <CreateComment newComment={props.newComment} setNewComment={props.setNewComment} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} />
         {props.comments ? props.comments.map((comment) => {
            return (<li>{comment.text}<div><LikeDislikeComment />&nbsp;<button>Reply</button></div><ReplyComment /></li>)
         }) : ''}
      </div>
   )
}

export default ListComments
