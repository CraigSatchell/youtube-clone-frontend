import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './api/apiKey';
import ListRelatedVideos from './components/relatedVideos/listRelatedVideos/ListRelatedVideos';
import ViewActiveVideo from './components/ViewActiveVideo/ViewActiveVideo';
import Header from './components/header/Header';


const App = () => {
   const [currentVideo, setCurrentVideo] = useState({});
   const [relatedVideos, setRelatedVideos] = useState([]);
   const [newComment, setNewComment] = useState('');
   const [newReply, setNewReply] = useState('');
   const [likes, setLikes] = useState('');
   const [dislikes, setDislikes] = useState('');
   const [searchText, setSearchText] = useState('');



   const apiPath = 'http://localhost:5000/api/comments';

   // fetch current video from YouTube API
   const getCurrentVideo = () => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?q=harrypotter&key=${apiKey}&maxResults=10&part=snippet`).then(response => setCurrentVideo(response.data.items[0])).catch(err => console.log(err.message));
   }


   // fetch related videos from YouTube API
   const getRelatedVideos = (videoId) => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${apiKey}`).then(response => console.log(response.data)).catch(err => console.log(err.message));
   }


   // fetch all video comments
   const getAllComments = () => {
      axios.get(apiPath).then((res) => { console.log(res.data); }).catch((err) => console.log(err));
   }


   // fetch video comment by video id
   const getCommentsByVideoId = (videoId) => {
      axios.get(`${apiPath}/${videoId}`).then((res) => { console.log(res.data); }).catch((err) => console.log(err));
   }


   // get current YouTube video
   useEffect(() => {
      getCurrentVideo();
   }, [])


   // get video comments
   useEffect(() => {
      getAllComments();
   }, []);


   // get video comments by video id
   useEffect(() => {
      getCommentsByVideoId('1111');
   }, []);

   
   // get related video
   useEffect(() => {
      getRelatedVideos('E6HhI1uIKKs');
   })


   console.log(currentVideo);


   return (
      <div id='app'>
         <Header />
            <div className="main-view">
               <div className="left-column">
                  <ViewActiveVideo />
               </div>
               <div className="right-column">
                  <ListRelatedVideos />
               </div>
            </div>
      </div>
   )
}

export default App
