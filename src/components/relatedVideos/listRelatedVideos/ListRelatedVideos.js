import React from 'react';
import ViewRelatedVideo from '../viewRelatedVideo/ViewRelatedVideo';
import './ListRelatedVideos.css';

const ListRelatedVideos = (props) => {
   // let listItem;
   // if (!props.relatedVideos) {
   //    listItem = props.relatedVideos.map((video) => {
   //       return (<li key={video.id.videoId}>
   //          <ViewRelatedVideo video={video} />
   //       </li>)
   //    })
   // }
   console.log('videos:',props.relatedVideos);

   return (
      <div id='list-related-videos'>
         <h4>Related Videos</h4>
         <ul>
            {props.relatedVideos ? props.relatedVideos.map((video) => {
               return (<li key={video.id.videoId}>
                  <ViewRelatedVideo video={video} />
               </li>)
            }) : 'Loading . . .'}
         </ul>
      </div>
   )
}


export default ListRelatedVideos
