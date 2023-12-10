import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js";
import { DefaultNavBar } from "../components/defaultNavBar.js";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavBar.js";
import { GetHomeCourses, GetCategories, GetTutors, GetStudents } from "../api/generalAPI";
import { Courses } from "../model/courses";

export const Homepage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [avatar, setAvatar]= useState();
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const link = "./login";

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
        <h2>Something</h2>
        
      )}
    </div>
  );
};