import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js";
import { DefaultNavBar } from "../components/defaultNavBar.js";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavBar.js";
import { GetHomeCourses, GetCategories, GetTutors ,GetStudents} from "../api/generalAPI";
import { Courses } from "../model/courses";

export const Homepage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [hasSession, setHasSession] = useState(false);
  const [coursesByCategory, setCoursesByCategory] = useState({});
  const [tutors, setTutors] = useState([]);

  const link="./login"

  useEffect(() => {
    GetUserSession().then((response) => {
      console.log(response);
      if (response.userinfo !== null && typeof response.userinfo !== "undefined") {
        console.log("Fetching session:",response.userinfo);
        setUser(response.userinfo);
        setRole(response.role);
        setHasSession(true);
      }
      
    });
  }, []);

  useEffect(() => {
    Promise.all([GetCategories(), GetHomeCourses(),GetTutors()])
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
            {coursesByCategory[category].map((value, key) => {
              const tutor = tutors.find((tutor) => tutor._id === value.tutorid);
              return (
                <div key={key}>
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
                    userid={user ? user.accountid: ""}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};