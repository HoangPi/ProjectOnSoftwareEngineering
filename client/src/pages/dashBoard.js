import { useEffect, useState } from "react"
import { NavigationBar } from "../components/NavBar"
import { GetUserSession } from "../api/generalAPI"
import { useNavigate, Link } from "react-router-dom"
import { MiniHeader } from "../components/miniHeader"
import { CourseList } from "../components/courseList"
import { Courses } from "../model/courses"
import { getTutorCourses } from "../api/tutorAPI"
import { getUserCourses } from "../api/userAPI"

export const DashBoard = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState()
    const [role,setRole] = useState()
    const [avatar, setAvatar]= useState();
    const [isLoading,setIsLoading] = useState(true)
    const [courses,setCourses] = useState([])
    useEffect(()=>{

        GetUserSession()
            .then((response) => {
                if (typeof (response.userinfo) === 'undefined' || response.userinfo === null) {
                    navigate('/')
                }
                else {
                    if (response.role === 'tutor') {
                        setUser(response.userinfo)
                        setRole(response.role)
                        setAvatar(response.userinfo.avatar)
                        getTutorCourses()
                            .then(value => {
                                setCourses(value.courses)
                                console.log(value.courses)
                                setIsLoading(false)
                            })

                    }

                    if (response.role === 'student') {
                        setUser(response.userinfo)
                        setRole(response.role)
                        setAvatar(response.userinfo.avatar)
                        getUserCourses()
                            .then(value => {
                                setCourses(value.courses)
                                console.log(value.courses)
                                setIsLoading(false)
                            })

                    }

                }
            })
    }, [])
    if (isLoading) return <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    return (
        <div>

            <NavigationBar user={user} role={role}avatar = {avatar}></NavigationBar>
            <MiniHeader avatar={user.avatar} name={user.name} role = {role}></MiniHeader>
            <nav aria-label="breadcrumb" style={{marginLeft:85}}>

                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">DashBoard</li>
                </ol>
            </nav>
            {role === "tutor" ? (
                // Render tutor-specific content
                <div>


                    <div style={{ paddingLeft: '20%' }} class="col-lg-9 col-md-8 col-12">
                        <div class="card mb-4">
                            <div class="card-header">
                                <h3 class="mb-0">Courses</h3>
                                <span>Manage your courses and its update like live, draft and insight.</span>
                            </div>
                            <div class="table-responsive overflow-y-hidden">
                                <table class="table mb-0 text-nowrap table-hover table-centered text-nowrap">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Courses</th>
                                            <th>Students</th>
                                            <th>Level</th>
                                            <th>Chapters</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                        
                                    </thead>
                                    {courses.map((value, key) => (
                                            
                                            <CourseList
                                                id={value._id}
                                                key={key}
                                                thumbnail={value.thumbnail}
                                                coursename={value.coursename}
                                                level={value.level}
                                                studentsid={value.studentsid}
                                            />
                                        ))}
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                // Render student-specific content
                <div>

                    <section className="product" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div className="container" style={{ flex: '1 1 auto' }}>
                            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {courses.map((value, key) => (

                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" style={{ marginRight: 70, marginTop: 30 }}>

                                        <Link to="/" key={key} style={{ textDecoration:'none',color:'inherit'}}>
                                        <div className="card-container" style={{ height: '100%',width:330 }}>
                                            <Courses
                                            key={key}
                                            thumbnail={value.thumbnail}
                                            coursename={value.coursename}
                                            tutorid={value.tutorid}
                                            category={value.category}
                                            level={value.level}
                                            page="dashboard"
                                        />
                                        </div>

                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    )



}