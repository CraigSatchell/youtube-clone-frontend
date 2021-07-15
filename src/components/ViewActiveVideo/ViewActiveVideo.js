import React from 'react';
import ListComments from '../comments/listComments/ListComments';
import ActiveVideo from '../activeVideo/ActiveVideo';
import './ViewActiveVideo.css';

const ViewActiveVideo = (props) => {
   return (
      <div id='view-active-video'>
         <ActiveVideo />
         <ListComments />
      </div>
   )
}

export default ViewActiveVideo
