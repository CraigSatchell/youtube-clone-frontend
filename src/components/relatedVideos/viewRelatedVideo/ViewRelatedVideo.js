import React from 'react';
import './ViewRelatedVideo.css';

const ViewRelatedVideo = (props) => {
   return (
      <div id='view-related-video' onClick={() => { props.handleRelatedClick(props.video) }}>
         <div>
            <iframe id="ytplayer" title='currentvideo' width="250" height="100%" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} ></iframe>
         </div>
         <div>
            {props.video.snippet === undefined ? '' : <h3>{props.video.snippet.title}</h3>}
         </div>
      </div>
   )
}

export default ViewRelatedVideo
