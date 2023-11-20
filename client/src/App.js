import './css/App.css';
import './css/props.css';
import './css/uifonts.css';

import { } from "./components/User.js"
import React, { useEffect, useState } from 'react'
// import * as api from './api/apiColections.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage  from './pages/homepage';
import { Signup } from './pages/signup';
import { Profile } from './pages/profile.js';
import {SignInPage} from './pages/signin.js'
import { DashBoard } from './pages/dashBoard.js';
import { TestPage } from './pages/test.js';
import { AddCourse } from './pages/addcourse.js';


// import Header from './components/header.js';
// import Sidebar from './components/sidebar.js';
// import Rightbar from './components/rightbar.js';
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


  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      {/* <Header/>
      <Rightbar/>
      <div className='app-content'> */}
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/dashboard' element={<DashBoard/>}></Route>
          <Route path='/addcourse' element={<AddCourse></AddCourse>}></Route>
        </Routes>
      </Router>
      {/* </div> */}
    </div>
  );
}

export default App;
