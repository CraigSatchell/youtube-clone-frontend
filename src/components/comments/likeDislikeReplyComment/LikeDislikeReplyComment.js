import React from 'react';
import ReplyComment from '../replyComment/ReplyComment';
import { ThumbDownAlt } from '@material-ui/icons';
import { ThumbUpAlt } from '@material-ui/icons';
import {  } from '@material-ui/icons';
import './LikeDislikeReplyComment.css';

const LikeDislikeComment = (props) => {
   return (
      <div className='like-dislike-comment'>
         <button onClick={() => { props.handleLike(props.comment._id) }}><ThumbUpAlt /></button>{props.comment.likes}
         <button onClick={() => { props.handleDislike(props.comment._id) }}><ThumbDownAlt /></button>{props.comment.dislikes}
         <button onClick={() => props.handleReplyCommentClick(props.comment._id)}>Reply</button>
         <div id={props.comment._id} className="hidden"><ReplyComment /></div>
      </div>
   )
}

export default LikeDislikeComment
