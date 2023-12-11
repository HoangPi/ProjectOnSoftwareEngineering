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
  const [hasSession, setHasSession] = useState(false);
  const [coursesByCategory, setCoursesByCategory] = useState({});
  const [tutors, setTutors] = useState([]);
  const [sortBy, setSortBy] = useState("default");
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

  useEffect(() => {
    Promise.all([GetCategories(), GetHomeCourses(), GetTutors()])
      .then(([categoryResponse, coursesResponse, tutorsRespose]) => {
        const categories = categoryResponse.categories;
        const courses = coursesResponse.courses;
        const tutors = tutorsRespose.tutors;

        console.log("Fetched categories:", categories);
        console.log("Fetched courses:", courses);
        console.log("Fetched tutors:", tutors);

        // Group courses by category
        const coursesByCategory = {};
        categories.forEach((category) => {
          coursesByCategory[category.namecategory] = courses.filter(
            (course) => course.category === category.namecategory
          );
        });

        setCoursesByCategory(coursesByCategory);
        setTutors(tutors);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching categories and courses:", error);
      });
      
  }, []);

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
        Object.keys(coursesByCategory).map((category, index) => (
          <div
            key={index}
            className="category"
            style={{
              marginLeft: "50px",
                marginTop: "100px",
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
              className="courses-container"
              style={{
                display: "flex",
                overflowX: "scroll",
                scrollBehavior: "smooth",
                paddingBottom: "10px",
              }}
            >
              {coursesByCategory[category].map((value, key) => {
                const tutor = tutors.find((tutor) => tutor._id === value.tutorid);
                return (
                  <div
                    key={key}
                    style={{ flex: "0 0 auto", marginRight: "10px" }}
                  >
                    <Courses
                        courseid={value._id}
                        thumbnail={value.thumbnail}
                        coursename={value.coursename}
                        tutorid={value.tutorid}
                        tutorname={tutor ? tutor.name : ""}
                        category={value.category}
                        level={value.level}
                        description={value.description}
                        studentsid={value.studentsid}
                        userid={user ? user._id : ""}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
  
      {/* Button to scroll courses horizontally */}
      <button
        style={{
          marginTop: "10px",
          marginLeft: "50px",
          marginBottom: "20px",
        }}
        onClick={() => {
          const container = document.querySelector(".courses-container");
          if (container) {
            container.scrollBy({
              left: 200, // Adjust the scroll amount as needed
              behavior: "smooth",
            });
          }
        }}
      >
        Scroll Right
      </button>
    </div>
  );
};


