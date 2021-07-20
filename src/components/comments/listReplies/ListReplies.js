import React from 'react';
import './ListReplies.css';

const ListReplies = (props) => {

   // const com = props.comments.replies.map((reply, index) => {
   //    return <li key={reply._id}>reply.text</li>
   // })

   console.log("comments list replies: ", props.comments[props.commentIndex].replies);
   return (
      <div className='list-replies'>
         <ul>
            {props.comments[props.commentIndex].replies.map((reply, index) => {
               return (<li key={reply._id}>{reply.text}</li>)
            })}
         </ul>
      </div>
   )
}

export default ListReplies
