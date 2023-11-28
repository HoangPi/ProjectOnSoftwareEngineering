import { useEffect, useState } from "react"
import { NavigationBar } from "../components/NavBar"
import { GetUserSession } from "../api/generalAPI"
import { useNavigate } from "react-router-dom"
import { MiniHeader } from "../components/miniHeader"
import { CourseList } from "../components/courseList"
import { Courses } from "../model/courses"
import { getTutorCourses } from "../api/tutorAPI"
import { getUserCourses } from "../api/userAPI"

export const DashBoard =()=>{
    const navigate = useNavigate()
    const [user,setUser] = useState()
    const [role,setRole] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        GetUserSession()
            .then((response)=>{
                if(typeof(response.userinfo)==='undefined' || response.userinfo===null){
                    navigate('/')
                }
                else{
                    if(response.role==='tutor'){
                        setUser(response.userinfo)
                        setRole(response.role)
                        getTutorCourses()
                            .then(value=>{
                                setCourses(value.courses)
                                console.log(value.courses)
                                setIsLoading(false)
                            })
                            
                    }

                    if(response.role==='student'){
                        setUser(response.userinfo)
                        setRole(response.role)
                        getUserCourses()
                            .then(value=>{
                                setCourses(value.courses)
                                console.log(value.courses)
                                setIsLoading(false)
                            })
                            
                    }
                    
                }
            })
    },[])
    if (isLoading) return <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    return(
        <div>
            <NavigationBar user={user} role={role}></NavigationBar>
            <MiniHeader avatar={user.avatar} name={user.name}></MiniHeader>
            {role === "tutor" ? (
                // Render tutor-specific content
                <div>
                    
                    {courses.map((value, key) => (
                        <CourseList
                        key={key}
                        thumbnail={value.thumbnail}
                        coursename={value.coursename}
                        level={value.level}
                    />
                    ))}
                </div>
            ) : (
                // Render student-specific content
                <div>
                    
                    <section className="product">
                        <div className="container" >
                            <div className="row" >
                                {courses.map((value, key) => (
                                    <Courses
                                    key={key}
                                    thumbnail={value.thumbnail}
                                    coursename={value.coursename}
                                    tutorid={value.tutorid}
                                    category={value.category}
                                    description={value.description}
                                />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
                


}