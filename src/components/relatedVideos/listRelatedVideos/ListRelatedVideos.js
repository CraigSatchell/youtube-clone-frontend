import React from 'react';
import ViewRelatedVideo from '../viewRelatedVideo/ViewRelatedVideo';
import './ListRelatedVideos.css';

const ListRelatedVideos = (props) => {
   return (
      <div id='list-related-videos'>
         <ul>
            {props.relatedVideos ? props.relatedVideos.map((video) => {
               return (<li key={video.id.videoId}>
                  <ViewRelatedVideo video={video} currentVideo={props.currentVideo} setCurrentVideo={props.setCurrentVideo} />
               </li>)
            }) : 'Loading . . .'}
         </ul>
      </div>
   )
}


export default ListRelatedVideos
