import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js";
import { DefaultNavBar } from "../components/defaultNavBar.js";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavBar.js";

import { GetChapters} from "../api/userAPI.js";
import { useLocation } from 'react-router-dom';



export const CourseDetail = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [hasSession, setHasSession] = useState(false);

  const [chaptersInfo, setChaptersInfo] = useState([]);
  const [courseInfo, setCourseInfo] = useState([]);

  const [avatar, setAvatar]= useState();
  
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const course = queryParams.get('courseId');

  useEffect(() => {
    GetUserSession()
        .then(respone => {
            // console.log(respone)
            if (respone.role==="admin"){
              navigate('/admin/dashboard')
          }
            else if (respone.userinfo !== null && typeof (respone.userinfo) !== 'undefined') {
                // console.log(respone.userinfo)
                setUser(respone.userinfo)
                setRole(respone.role)
                setHasSession(true)
                setAvatar(respone.userinfo.avatar)
                GetChapters(course)
                  .then((chaptersData) => {
                    console.log(chaptersData.chapters);
                    console.log(chaptersData.course);
                    setChaptersInfo(chaptersData.chapters);
                    setCourseInfo(chaptersData.course);
                    setIsLoading(false);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
            }else {
              navigate('/')
            }

        })
}, [])

  

  const handleSignOut = () => {
    // console.log('Sign Out')
    SignOut();
    navigate("/");
  };

  return (
    <div className="Homepage">
      {!hasSession ? (
        // Render tutor-specific content
        <DefaultNavBar></DefaultNavBar>
      ) : (
        <NavigationBar user={user} role={role} avatar = {avatar}> </NavigationBar>
      )}
      <nav aria-label="breadcrumb" style={{ marginLeft: 85 , textDecoration:"none",color:"inherit"}}>
        <style>
            {`
            a {color: inherit;text-decoration: none;}
            a:hover {text-decoration: none;background-color:#daf0ff;border-radius:30px}
            `}
        </style>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/dashboard">DashBoard</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {courseInfo.coursename}
          </li>
        </ol>
      </nav>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <div class="card text-center" style={{width:"80%"}}>
            <div class="card-header">
              {courseInfo.coursename}
            </div>
            <div class="card-body">
              <img className="image-course" src={courseInfo.thumbnail} style={{width: '100%', maxHeight: '250px', objectFit: 'cover' ,objectPosition: 'center'}}></img>
            </div>
            <div class="card-footer text-body-secondary">
              Chapters
            </div>
          </div>
        </div>
      {isLoading ? ( // Render loading message if still loading
        <div class="d-flex align-items-center" style={{marginTop:"100px",marginLeft:"50px", marginRight:"100px"}}>
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
      ) : (
        <div className="list-group" style={{marginLeft:"50px",marginBottom:'100px'}}>
        {Array.isArray(chaptersInfo) && chaptersInfo.length > 0 ? (
          chaptersInfo.map((value, key) => (
            <a href={`/lessonpage?chapterId=${value._id}`} className="list-group-item list-group-item-action" key={key}>
              {value.name}
            </a>
          ))
        ) : (
          <p>No chapters available</p>
        )}
      </div>
    )}
    </div>
  );
};