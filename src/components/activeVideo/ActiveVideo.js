import React from 'react';
import './ActiveVideo.css';


const ActiveVideo = (props) => {
   return (
      <div id='active-video'>
         <iframe id="ytplayer" type="text/html" width="690" height="400"
               src={`https://www.youtube.com/embed/${props.videoId}`}
               frameborder="0"></iframe> 
       </div>
   )
}

export default ActiveVideo
