import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './api/apiKey';
import ListRelatedVideos from './components/relatedVideos/listRelatedVideos/ListRelatedVideos';
import ViewActiveVideo from './components/ViewActiveVideo/ViewActiveVideo';
import Header from './components/header/Header';

const App = () => {
   const [currentVideo, setCurrentVideo] = useState(null);
   const [currentVideoId, setCurrentVideoId] = useState(null);
   const [currentComment, setCurrentComment] = useState(null);
   const [currentCommentId, setCurrentCommentId] = useState(null);
   const [relatedVideos, setRelatedVideos] = useState(null);
   const [comments, setComments] = useState(null);
   const [replies, setReplies] = useState(null);
   const [relatedVideoId, setRelatedVideoId] = useState(null)
   const [newComment, setNewComment] = useState('');
   const [newReply, setNewReply] = useState('');
   const [likes, setLikes] = useState(0);
   const [dislikes, setDislikes] = useState(0);
   const [searchText, setSearchText] = useState('');
   const [commentCount, setCommentCount] = useState(0);


   const apiPath = 'http://localhost:5000/api/comments';


   // fetch current video from YouTube API
   const getCurrentVideo = (searchText) => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchText}&key=${apiKey}&maxResults=1&part=snippet&type=video`).then(response => { console.log(response.data.items); setCurrentVideo(response.data.items[0]); setCurrentVideoId(response.data.items[0].id.videoId); setRelatedVideoId(response.data.items[0].id.videoId) }).catch(err => console.log(err.message));
   }


   // fetch related videos from YouTube API
   const getRelatedVideos = (videoId) => {
      axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${apiKey}&part=snippet`).then(response => setRelatedVideos(response.data.items)).catch(err => console.log(err.message));
   }


   // // fetch all video comments
   // const getAllComments = () => {
   //    axios.get(apiPath).then((res) => { console.log(res.data); }).catch((err) => console.log(err));
   // }


   // fetch video comment by video id
   const getCommentsByVideoId = (videoId) => {
      axios.get(`${apiPath}/${videoId}`).then((res) => { setComments(res.data); setCommentCount(res.data.length) }).catch((err) => console.log(err));
   }

   // add new comment
   const postNewComment = (data) => {
      return axios.post(`${apiPath}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }

   // add new reply
   const postNewReply = (commentId, data) => {
      return axios.post(`${apiPath}/${commentId}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }

   // add new comment
   const putCommentById = (commentId, data) => {
      return axios.put(`${apiPath}/${commentId}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }

   // get current YouTube video
   useEffect(() => {
      getCurrentVideo();
      console.log('getCurrentVideo');
   }, [])


   // // get video comments
   // useEffect(() => {
   //    getAllComments();
   // }, []);


   // get video comments by video id
   useEffect(() => {
      getCommentsByVideoId(currentVideoId);
      console.log('getCommentsByVideoId');
   }, [currentVideoId]);


   // get related video
   useEffect(() => {
      getRelatedVideos(relatedVideoId); console.log('getRelatedVideos');
   }, [relatedVideoId])


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


   const handleNewCommentSubmit = (event) => {
      event.preventDefault();
      const comment = {
         text: newComment,
         likes: 0,
         dislikes: 0,
         videoId: currentVideoId,
         replies: []
      }
      postNewComment(comment);
      comments.push(comment);
      setNewComment('');
   }


   //handle new comment change
   const handleNewCommentChange = (event) => {
      setNewComment(event.target.value);
   }


   const handleNewReplySubmit = (commentId, commentIndex, event) => {
      event.preventDefault();
      alert('handle reply submit');
      const comment = {
         text: newReply
      }
      console.log('reply comment: ', comment);
      console.log('reply commentId, commentIndex', commentId, commentIndex);
      // postNewReply(commentId, comment);
      // comments[commentIndex].replies.push(comment);
      setNewReply('');
   }


   //handle new reply change
   const handleNewReplyChange = (event) => {
      setNewReply(event.target.value);
      console.log("reply change:", event.target.value);
   }

   const handleReplyCommentClick = (commentId) => {
      document.getElementById(commentId).classList.remove('hidden');
      setCurrentCommentId(commentId);
   }

   const handleRelatedClick = (video) => {
      setCurrentVideo(video);
      setCurrentVideoId(video.id.videoId)
   }

   const handleLike = (commentId, index) => {
      const selectedComment = comments[index];
      const data = {
         text: selectedComment.text,
         likes: selectedComment.likes + 1,
         dislikes: selectedComment.dislikes,
         videoId: selectedComment.videoId,
      }
      putCommentById(commentId, data);
      const newComments = [...comments];
      newComments[index] = data;
      setComments(newComments);
   }


   const handleDislike = (commentId, index) => {
      const selectedComment = comments[index];
      const data = {
         text: selectedComment.text,
         likes: selectedComment.likes,
         dislikes: selectedComment.dislikes + 1,
         videoId: selectedComment.videoId,
      }
      putCommentById(commentId, data);
      const newComments = [...comments];
      newComments[index] = data;
      setComments(newComments);
   }

   const myHandle = (event) => {
      // alert('myHandle');
      // console.log(currentCommentId);
      event.preventDefault();
      document.getElementById(currentCommentId).classList.add('hidden');
      const commentIndex = comments.findIndex((comment) => comment._id === currentCommentId);
      const comment = {
         text: newReply
      }

      postNewReply(currentCommentId, comment);
      comments[commentIndex].replies.push(comment);
      setNewReply('');

   }

   return (
      <div id='app'>
         <Header handleSearchChange={handleSearchChange} setSearchText={setSearchText} searchText={searchText} handleSearchSubmit={handleSearchSubmit} />
         <div className="main-view">
            <div className="left-column">
               <ViewActiveVideo currentVideo={currentVideo} newComment={newComment} setNewComment={setNewComment} handleNewCommentChange={handleNewCommentChange} handleNewCommentSubmit={handleNewCommentSubmit} newReply={newReply} setNewReply={setNewReply} handleNewReplyChange={handleNewReplyChange} handleNewReplySubmit={handleNewReplySubmit} comments={comments} setComments={setComments} replies={replies} setReplies={setReplies} likes={likes} setLikes={setLikes} dislikes={dislikes} setDislikes={setDislikes} commentCount={commentCount} handleReplyCommentClick={handleReplyCommentClick} handleLike={handleLike} handleDislike={handleDislike} currentComment={currentComment} setCurrentComment={setCurrentComment} myHandle={myHandle} />
            </div>
            <div className="right-column">
               <ListRelatedVideos relatedVideos={relatedVideos} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} currentVideoId={currentVideoId} setCurrentVideoId={setCurrentVideoId} handleRelatedClick={handleRelatedClick} />
            </div>
         </div>
      </div>
   )
}

export default App
