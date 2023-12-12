import './css/App.css';
import './css/props.css';
import './css/uifonts.css';

import { } from "./components/User.js"
import React, { useEffect, useState } from 'react'
// import * as api from './api/apiColections.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Signup } from './pages/signup';
import { Profile } from './pages/profile.js';
import {SignInPage} from './pages/signin.js'
import { DashBoard } from './pages/dashBoard.js';
import { Homepage } from './pages/homepage.js';
import { TestPage } from './pages/test.js';
import { AddCourse } from './pages/addcourse.js';
import { LessonPage } from './pages/lessonpage.js';
import { SortedHome } from './pages/sortedhome.js';
import { CourseDetail} from './pages/coursedetail.js';
import LessonEditor from './pages/lesson_editor.js'


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
          <Route path='/home' element={<Homepage/>}></Route>
          <Route path='/courses' element={<SortedHome></SortedHome>}></Route>
          <Route path='/addcourse' element={<AddCourse></AddCourse>}></Route>
          <Route path='/lessonEditor' element={<LessonEditor></LessonEditor>}></Route>
          <Route path='/lessonpage' element={<LessonPage></LessonPage>}></Route>
          <Route path='/coursedetail' element={<CourseDetail></CourseDetail>}></Route>
          
        </Routes>
      </Router>
      {/* </div> */}
    </div>
  );
}

export default App;
