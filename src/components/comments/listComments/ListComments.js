import React from 'react';
import './ListComments.css';
import CreateComment from '../createComment/CreateComment';
import LikeDislikeReplyComment from '../likeDislikeReplyComment/LikeDislikeReplyComment';


const ListComments = (props) => {
   return (
      <div className='list-comments'>
         <h2>{props.commentCount} Comments</h2>
         {props.currentVideo ? <CreateComment newComment={props.newComment} setNewComment={props.setNewComment} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} /> : ''}
         <div>
            {props.comments ? props.comments.map((comment, index) => {
               return (<li key={comment._id}>{comment.text}<div><LikeDislikeReplyComment comments={props.comments} index={index} comment={props.comment} handleReplyCommentClick={props.handleReplyCommentClick} likes={props.likes} dislikes={props.dislikes} handleLike={props.handleLike} handleDislike={props.handleDislike} handleReplySubmit={props.handleReplySubmit} handleNewReplySubmit={props.handleNewReplySubmit}/></div></li>)
            }) : ''}
         </div>
      </div>
   )
}

export default ListComments
