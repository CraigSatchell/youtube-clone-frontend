import React from 'react';
import ViewRelatedVideo from '../viewRelatedVideo/ViewRelatedVideo';
import './ListRelatedVideos.css';

const ListRelatedVideos = (props) => {

   const listItem = props.relatedVideos.map((video) => {
      return (<li key={video.id.videoId}>
         <ViewRelatedVideo video={video} />
      </li>)
   })


   return (
      <div id='list-related-videos'>
         <h4>Related Videos</h4>
         <ul>
            {listItem}
         </ul>
      </div>
   )
}

// Ally Notes. 
// Use Cards for Videos. 
// Image onClick - would need to pass in ....item[i].id.videoID (based on postman return)
// Image thumbnail from postman would include img src of ......item[i].snippet.thumbnails.default.url (based on postman return)

export default ListRelatedVideos
