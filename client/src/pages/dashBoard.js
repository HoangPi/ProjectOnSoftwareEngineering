import { useEffect, useState } from "react"
import { NavigationBar } from "../components/NavBar"
import { GetUserSession } from "../api/generalAPI"
import { useNavigate } from "react-router-dom"
import { MiniHeader } from "../components/miniHeader"
import { CourseList } from "../components/courseList"
import { getTutorCourses } from "../api/tutorAPI"

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
                    
                }
            })
    },[])
    if (isLoading) return <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    return(
        <div>
            <MiniHeader avatar={user.avatar} name={user.name}></MiniHeader>
            <NavigationBar user={user} role={role}></NavigationBar>
            {courses.map((value,key)=>
                <CourseList thumbnail={value.thumbnail} coursename={value.coursename} level={value.level}/>
            )}
        </div>
    )
}