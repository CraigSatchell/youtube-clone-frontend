import React from 'react';
import ReplyComment from '../replyComment/ReplyComment';
import { ThumbDownAlt } from '@material-ui/icons';
import { ThumbUpAlt } from '@material-ui/icons';
import {  } from '@material-ui/icons';
import './LikeDislikeReplyComment.css';

const LikeDislikeComment = (props) => {
   return (
      <div className='like-dislike-comment'>
         <button onClick={() => { props.handleLike(props.comments[props.index]._id, props.index) }}><ThumbUpAlt /></button>{props.comments[props.index].likes}
         <button onClick={() => { props.handleDislike(props.comments[props.index]._id, props.index) }}><ThumbDownAlt /></button>{props.comments[props.index].dislikes}
         <button onClick={() => props.handleReplyCommentClick(props.comments[props.index]._id)}>Reply</button>
         <div id={props.comments[props.index]._id} className="hidden"><ReplyComment /></div>
      </div>
   )
}

export default LikeDislikeComment