import React from 'react';
import './ActiveVideo.css';


const ActiveVideo = (props) => {
   return (
      <div id='active-video'>
         {props.currentVideo ? <iframe id="ytplayer" title='currentvideo' width="100%" height="100%" src={`https://www.youtube.com/embed/${props.currentVideo.id.videoId}`}></iframe> : 'Loading . . .'}
         {props.currentVideo ? <div> <h2>  {props.currentVideo.snippet.title}</h2> <p> {props.currentVideo.snippet.description}</p></div> : 'Loading . . . '}
      </div>
   )
}

export default ActiveVideo
