import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js";
import { DefaultNavBar } from "../components/defaultNavBar.js";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavBar.js";

import { GetChapters} from "../api/userAPI.js";
import { Courses } from "../model/courses";
import { useLocation } from 'react-router-dom';



export const CourseDetail = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [hasSession, setHasSession] = useState(false);


  const [chaptersInfo, setChaptersInfo] = useState([]);
  const [avatar, setAvatar]= useState();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const course = queryParams.get('courseId');

  useEffect(() => {
    GetUserSession()
        .then(respone => {
            // console.log(respone)
            if (respone.userinfo !== null && typeof (respone.userinfo) !== 'undefined') {
                // console.log(respone.userinfo)
                setUser(respone.userinfo)
                setRole(respone.role)
                setHasSession(true)
                setAvatar(respone.userinfo.avatar)
                GetChapters(course)
                  .then((chaptersData) => {
                    const chapters = chaptersData.chapters;
                    console.log(chaptersData.chapters);
                    setChaptersInfo(chaptersData.chapters);
                    setIsLoading(false);
                  })
                  .catch((error) => {
                    setIsError(true);
                    console.log(error);
                  });
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

      {isLoading ? ( // Render loading message if still loading
        <div class="d-flex align-items-center" style={{marginTop:"100px",marginLeft:"50px", marginRight:"100px"}}>
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
      ) : (
        <div className="list-group" style={{marginLeft:"50px"}}>
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