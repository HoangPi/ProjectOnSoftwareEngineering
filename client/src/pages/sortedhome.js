import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js";
import { DefaultNavBar } from "../components/defaultNavBar.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { NavigationBar } from "../components/NavBar.js";
import { GetHomeCourses, GetCategories, GetTutors, GetStudents } from "../api/generalAPI";
import { Courses } from "../model/courses";


export const SortedHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  const [avatar, setAvatar]= useState();
  const [hasSession, setHasSession] = useState(false);
  const [coursesByCategory, setCoursesByCategory] = useState({});
  const [tutors, setTutors] = useState([]);
  const [categories,setCategories]=useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [isLoading, setIsLoading] = useState(true); // Loading state

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

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
        Promise.all([GetCategories(),GetHomeCourses(), GetTutors()])
        .then(([categoryResponse,coursesResponse, tutorsResponse]) => {
            setCategories(categoryResponse.categories);
            const courses = coursesResponse.courses;
            const tutors = tutorsResponse.tutors;
    
            console.log("Fetched courses:", courses);
            console.log("Fetched tutors:", tutors);
    
            // Filter courses by the selected category
            let filteredCourses = courses;
            if (selectedCategory) {
            filteredCourses = courses.filter((course) => course.category === selectedCategory);
            }
    
            // Sort courses based on the selected option
            let sortedCourses = [...filteredCourses];
            if (sortBy === "createdAt") {
            sortedCourses.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            } else if (sortBy === "name") {
            sortedCourses.sort((a, b) => a.coursename.localeCompare(b.coursename));
            } else if (sortBy === "level") {
                sortedCourses.sort((a, b) => {
                  const levels = ["starter", "intermediate", "expert"];
                  return levels.indexOf(a.level) - levels.indexOf(b.level);
                });
            }
    
            setCoursesByCategory(sortedCourses);
            setTutors(tutors);
            setTimeout(() => {
            setIsLoading(false);
            }, 1000);
        })
        .catch((error) => {
            console.error("Error fetching courses and tutors:", error);
        });
    }, [sortBy, selectedCategory]);
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };
      
  const handleSignOut = () => {
    // console.log('Sign Out')
    SignOut();
    navigate("/");
  };
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="Homepage">
      {!hasSession ? (
        // Render tutor-specific content
        <DefaultNavBar></DefaultNavBar>
      ) : (
        <NavigationBar user={user} role={role} avatar = {avatar}> </NavigationBar>
      )}
<div>
  <label htmlFor="category">Category:</label>
  <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
    <option value="">All Categories</option>
    {categories.map((category, index) => (
      <option key={index} value={category.namecategory}>
        {category.namecategory}
      </option>
    ))}
  </select>
</div>
<div>
  <label htmlFor="sort-by">Sort By:</label>
  <select id="sort-by" value={sortBy} onChange={handleSortByChange}>
    <option value="createdAt">Recently Created</option>
    <option value="updatedAt">Recently Updated</option>
    <option value="name">By Alphabet</option>
    <option value="level">Level</option>
  </select>
</div>

        {isLoading ? (
        // Render loading message if still loading
        <div className="d-flex align-items-center" style={{ marginTop: "100px", marginLeft: "50px", marginRight: "100px" }}>
            <strong role="status">Loading...</strong>
            <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
        ) : (
        <div>
            <h2 style={{ textAlign: "center" }}>All Courses {selectedCategory}</h2>
            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "20px",
                marginLeft: "50px",
                marginTop: "100px",
                marginRight: "50px",
            }}
            >
            {coursesByCategory.map((course, index) => {
                const tutor = tutors.find((tutor) => tutor._id === course.tutorid);
                return (
                <div key={index}>
                    <Courses
                    courseid={course._id}
                    thumbnail={course.thumbnail}
                    coursename={course.coursename}
                    tutorid={course.tutorid}
                    tutorname={tutor ? tutor.name : ""}
                    category={course.category}
                    level={course.level}
                    description={course.description}
                    studentsid={course.studentsid}
                    userid={user ? user._id : ""}
                    />
                </div>
                );
            })}
            </div>
        </div>
        )}
    </div>
  );
};