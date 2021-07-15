import React from 'react';
import './ViewRelatedVideo.css';

const ViewRelatedVideo = (props) => {
    return (
       <div id='viewRelatedVideo'>
          <iframe id="ytplayer" title='currentvideo' width="100%" height="100%" src={`https://www.youtube.com/embed/${props.video.id.videoId}`}></iframe>
          <h5>{props.video.snippet.title}</h5>
        </div>
    )
}

export default ViewRelatedVideo
