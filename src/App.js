import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
   const [currentVideo, setCurrentVideo] = useState('');
   const [relatedVideos, setRelatedVideos] = useState([]);
   const [newComment, setNewComment] = useState('');
   const [newReply, setNewReply] = useState('');
   const [likes, setLikes] = useState('');
   const [dislikes, setDislikes] = useState('');
   const [searchText, setSearchText] = useState('');

   useEffect(() => {
      
   })

   return (
      <div id='app'>
         <h1>YouTube Clone</h1>
      </div>
   )
}

export default App
