import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './api/apiKey';
import ListRelatedVideos from './components/relatedVideos/listRelatedVideos/ListRelatedVideos';
import ViewActiveVideo from './components/ViewActiveVideo/ViewActiveVideo';
import Header from './components/header/Header';

const App = () => {
   const [currentVideo, setCurrentVideo] = useState(null);
   const [relatedVideos, setRelatedVideos] = useState(null);
   const [comments, setComments] = useState(null);
   const [replies, setReplies] = useState(null);
   const [relatedVideoId, setRelatedVideoId] = useState(null)
   const [newComment, setNewComment] = useState('');
   const [newReply, setNewReply] = useState('');
   const [likes, setLikes] = useState(0);
   const [dislikes, setDislikes] = useState(0);
   const [searchText, setSearchText] = useState('');
   



   const apiPath = 'http://localhost:5000/api/comments';


      // fetch current video from YouTube API
   const getCurrentVideo = (searchText) => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchText}&key=${apiKey}&maxResults=10&part=snippet&type=video`).then(response => { console.log(response.data.items); setCurrentVideo(response.data.items[0]); setRelatedVideoId(response.data.items[0].id.videoId) }).catch(err => console.log(err.message));
   }


   // fetch related videos from YouTube API
   const getRelatedVideos = (videoId) => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${apiKey}&part=snippet`).then(response => setRelatedVideos(response.data.items)).catch(err => console.log(err.message));
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
      getRelatedVideos(relatedVideoId);
   },[relatedVideoId])


   // handle search submit
   const handleSearchSubmit = (event) => {
      event.preventDefault();
      getCurrentVideo(searchText);
      setSearchText('');   // clear search text values
   }


   //handle search change
   const handleSearchChange = (event) => {
      setSearchText(event.target.value);
   }


   // handle new comment submit
   const handleNewCommentSubmit = (event) => {
      event.preventDefault();
   }


   //handle new comment change
   const handleNewCommentChange = (event) => {
      setNewComment(event.target.value);
      console.log(newComment);
   }

   console.log(relatedVideos);

   return (
      <div id='app'>
         <Header handleSearchChange={handleSearchChange} setSearchText={setSearchText} searchText={searchText} handleSearchSubmit={handleSearchSubmit} />
         <div className="main-view">
            <div className="left-column">
               <ViewActiveVideo currentVideo={currentVideo} newComment={newComment} setNewComment={setNewComment} newReply={newReply} setNewReply={setNewReply} comments={comments} setComments={setComments} replies={replies} setReplies={setReplies}/>
            </div>
            <div className="right-column">
               <ListRelatedVideos relatedVideos={relatedVideos} currentVideo = {currentVideo} setCurrentVideo = {setCurrentVideo} />
            </div>
         </div>
      </div>
   )
}

export default App
