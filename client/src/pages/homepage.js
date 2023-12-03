import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js"
import {DefaultNavBar} from "../components/defaultNavBar.js"
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavBar.js";
import { GetHomeCourses, GetCategories } from "../api/generalAPI"
import { Courses } from "../model/courses"

export const Homepage =()=>{
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [role,setRole]=useState()
    const [hasSession,setHasSession]=useState(false)
    const [courses,setCourses] = useState([])



    useEffect(() => {
        GetUserSession()
            .then(respone => {
                console.log(respone)
                if(respone.userinfo!==null && typeof(respone.userinfo)!=='undefined'){
                    console.log(respone.userinfo)
                    setUser(respone.userinfo)
                    setRole(respone.role)
                    setHasSession(true)
                }
                
                GetCategories()
                .then(categoryResponse => {
                  const categories = categoryResponse.categories;
                  console.log("Fetched categories:", categories);
                  
                  // Fetch courses for each category
                  categories.forEach(category => {
                    fetchCourses(category);
                  });
                })
                .catch(error => {
                  console.error("Error fetching categories:", error);
                });
                
            })
    },[])

    const handleSignOut=()=>{
        // console.log('Sign Out')
        SignOut()
        navigate('/')
    }



    const fetchCourses = (category) => {
        GetHomeCourses(category)
          .then((value) => {
            console.log(`Fetched ${category} courses:`, value.courses);
  
            // Update state with unique courses
            setCourses((prevCourses) => {
              const existingCourses = prevCourses.map((course) => course.coursename);
              const newCourses = value.courses.filter(
                (course) => !existingCourses.includes(course.coursename)
              );
  
              return [...prevCourses, ...newCourses];
            });
          })
          .catch((error) => {
            console.error(`Error fetching ${category} courses:`, error);
          });
      };
    const coursesByCategory = {};
    courses.forEach((course) => {
      if (!coursesByCategory[course.category]) {
        coursesByCategory[course.category] = [];
      }
      coursesByCategory[course.category].push(course);
    });
    return (
      <div className="Homepage">
        {!hasSession ? (
          // Render tutor-specific content
          <DefaultNavBar></DefaultNavBar>
        ) : (
          <NavigationBar user={user} role={role}></NavigationBar>
        )}
  
        {Object.keys(coursesByCategory).map((category, index) => (
          <div
            key={index}
            className="category"
            style={{
              marginLeft: "50px",
              marginTop: "50px",
              marginRight: "50px",
              backgroundColor: "#ececec",
              padding: "20px",
              borderRadius: "22px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ textAlign: "center" }}>{category}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
              }}
            >
              {coursesByCategory[category].map((value, key) => (
                <div key={key} >
                  <Courses
                    thumbnail={value.thumbnail}
                    coursename={value.coursename}
                    tutorid={value.tutorid}
                    category={value.category}
                    level={value.level}
                    description={value.description}
                    studentsid={value.studentsid}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
