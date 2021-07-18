import React from 'react';
import ReplyComment from '../replyComment/ReplyComment';
import './LikeDislikeReplyComment.css';

const LikeDislikeComment = (props) => {
   return (
      <div className='like-dislike-comment'>
         <button onClick={props.handleLike}>Like</button>{props.comment.likes}
         <button onClick={props.handleDislike}>Dislike </button>{props.comment.dislikes}
         <button onClick={() => props.handleReplyCommentClick(props.comment._id)}>Reply</button>
         <div id={props.comment._id} className="hidden"><ReplyComment /></div>
      </div>
   )
}

export default LikeDislikeComment
