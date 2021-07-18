import React from 'react';
import ListComments from '../comments/listComments/ListComments';
import ActiveVideo from '../activeVideo/ActiveVideo';
import './ViewActiveVideo.css';

const ViewActiveVideo = (props) => {
   return (
      <div id='view-active-video'>
         <ActiveVideo currentVideo={props.currentVideo} />
         <ListComments newComment={props.newComment} setNewComment={props.setNewComment} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} newReply={props.newReply} setNewReply={props.setNewReply} handleNewReplyChange={props.handleNewReplyChange} handleNewReplySubmit={props.handleNewReplySubmit} comments={props.comments} setComments={props.setComments} replies={props.replies} setReplies={props.setReplies} likes={props.likes} setLikes={props.setLikes} dislikes={props.dislikes} setDislike={props.setDislikes} commentCount={props.commentCount} showReplyComment={props.showReplyComment} handleReplyCommentClick={props.handleReplyCommentClick} />
      </div>
   )
}

export default ViewActiveVideo
