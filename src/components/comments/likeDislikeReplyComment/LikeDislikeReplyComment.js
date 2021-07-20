import React from 'react';
import ReplyComment from '../replyComment/ReplyComment';
import ListReplies from '../listReplies/ListReplies';
import { ThumbDownAlt } from '@material-ui/icons';
import { ThumbUpAlt } from '@material-ui/icons';
import {  } from '@material-ui/icons';
import './LikeDislikeReplyComment.css';

const LikeDislikeComment = (props) => {
   console.log('likeDislike: ', props.comments[props.index])
   return (
      <div className='like-dislike-comment'>
         <button onClick={() => { props.handleLike(props.comments[props.index]._id, props.index) }}><ThumbUpAlt /></button>{props.comments[props.index].likes}
         <button onClick={() => { props.handleDislike(props.comments[props.index]._id, props.index) }}><ThumbDownAlt /></button>{props.comments[props.index].dislikes}
         <button onClick={() => props.handleReplyCommentClick(props.comments[props.index]._id)}><span>Reply</span></button>
         <div id={props.comments[props.index]._id} className="hidden"><ReplyComment comments={props.comments} commentIndex={props.index} newReply={props.newReply} handleNewReplySubmit={props.handleNewReplySubmit} handleNewReplyChange={props.handleNewReplyChange}/></div>
         {props.comments.replies ? <ListReplies comments={props.comments} commentIndex={props.index} /> : ''}
      </div>
   )
}

export default LikeDislikeComment
