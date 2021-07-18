import React from 'react';
import ReplyComment from '../replyComment/ReplyComment';
import './LikeDislikeReplyComment.css';

const LikeDislikeComment = (props) => {
    return (
        <div id='like-dislike-comment'>
          <button>Like</button>
          <button>Dislike</button>
          <button onClick={()=>props.handleReplyCommentClick(props.comment)}>Reply</button>
          <div id="replyComment" className="hidden"><ReplyComment /></div>
        </div>
    )
}

export default LikeDislikeComment
