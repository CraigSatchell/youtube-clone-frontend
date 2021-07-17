import React from 'react';
import './ViewRelatedVideo.css';

const ViewRelatedVideo = (props) => {

   const handleOnClick = (video) => {
      alert('click related video');
      console.log(video);
      //props.setCurrentVideo(video);
   }

   return (
      <div id='view-related-video' onClick={() => { handleOnClick(props.video) }}>
         <div>
            <iframe id="ytplayer" title='currentvideo' width="250" height="100%" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} ></iframe>
         </div>
         <div>
            <h3>{props.video.snippet.title}</h3>
         </div>
      </div>
   )
}

export default ViewRelatedVideo
