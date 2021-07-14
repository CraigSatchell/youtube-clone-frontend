import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './api/apiKey';

const App = () => {
   const [currentVideo, setCurrentVideo] = useState({});
   const [relatedVideos, setRelatedVideos] = useState([]);
   const [newComment, setNewComment] = useState('');
   const [newReply, setNewReply] = useState('');
   const [likes, setLikes] = useState('');
   const [dislikes, setDislikes] = useState('');
   const [searchText, setSearchText] = useState('');
   const [allVideos, setAllVideos] = useState({});


   // useEffect(() => {
   //    axios.get(`https://www.googleapis.com/youtube/v3/search?q=harrypotter&key=${apiKey}`).then(response => console.log(response.data)).catch(err => { console.log(err); })  })

   // }, [currentVideo]);


   
   useEffect(() => {
      (async () => {
         await axios.get(`https://www.googleapis.com/youtube/v3/search?q=harrypotter&key=${apiKey}&maxResults=2&part=snippet`).then(response => console.log(response.data)).catch(err => console.log(err))
      })()
   }, []);


   //    (async () => {
   //       await axios.get(`https://www.googleapis.com/youtube/v3/search?q=harrypotter&key=${apiKey}`).then(response => console.log(response.data)).catch(err => console.log(err))
   //   })()


   return (
      <div id='app'>
         <h1>YouTube Clone</h1>
      </div>
   )
}

export default App
