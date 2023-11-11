import './css/App.css';
import './css/props.css';
import './css/uifonts.css';

import { } from "./components/User.js"
import { NavigationBar } from "./components/NavBar.js"
import { Post } from "./components/Post.js"
import { Post as listOfPosts } from "./model/posts.js"
import React, { useEffect, useState } from 'react'
import { InputPost } from './components/NewPost';
import { PostContent } from './components/PostContent.js';
import * as api from './api/apiColections.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage  from './pages/homepage';
import { Signup } from './pages/signup';


import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
function App() {
  const [posts, setPosts] = useState([{}])
  const [content, setContent] = useState('')
  const PostBackgroundColor = ['#E5E4DA','#BFB0B3']

  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   fetch('/getall', {
  //     method: 'POST'
  //   }).then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setPosts(data.posts)
  //       console.log(data.posts)
  //       setLoading(false)
  //     }
  //   ).then(() => setLoading(false))
  // }, [])

  const sendData = async (event) =>{
    let newPosts = await api.sendPost(event,content)
    setPosts(newPosts)
  }
  const deletePost = async (event,id)=>{
    let newPosts = await api.deletePost(event,id)
    setPosts(newPosts)
  }
  const addComment = async (event,id,comment)=>{
    let newPosts = await api.addComment(event,id,comment)
    setPosts(newPosts)
  }


  if (loading) return <h1>Loading...</h1>

  return (
    <div className="App flex">
      <Header/>
      <Sidebar/>
      <div className='app-content'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      </div>
      
      {/* <InputPost updatePost={setContent} post={content}  sendCommand={sendData}></InputPost>
      {posts.map((value,key) => {
        var c = PostBackgroundColor[key&1]
        return (
          <PostContent color = {PostBackgroundColor[key%2]} addComment = {addComment} deleteCommand={deletePost} id={value.id} comment={value.comment} content={value.content}></PostContent>
        )
      })} */}
    </div>
  );
}

export default App;
