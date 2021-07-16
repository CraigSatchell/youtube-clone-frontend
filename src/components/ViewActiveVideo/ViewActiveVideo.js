import React from 'react';
import ListComments from '../comments/listComments/ListComments';
import CreateComment from '../comments/createComment/CreateComment';
import ActiveVideo from '../activeVideo/ActiveVideo';
import './ViewActiveVideo.css';

const ViewActiveVideo = (props) => {
   return (
      <div id='view-active-video'>
         <ActiveVideo currentVideo={props.currentVideo} />
         <CreateComment />
         <ListComments />
      </div>
   )
}

export default ViewActiveVideo
