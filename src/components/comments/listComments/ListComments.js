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
            {props.comments ? props.comments.map((comment) => {
               return (<li key={comment._id}>{comment.text}<div><LikeDislikeReplyComment comment={comment} handleReplyCommentClick={props.handleReplyCommentClick} likes={props.likes} dislikes={props.dislikes} handleLike={props.handleLike} handleDislike={props.handleDislike} /></div></li>)
            }) : ''}
         </div>
      </div>
   )
}

export default ListComments
