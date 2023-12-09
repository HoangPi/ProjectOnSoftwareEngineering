import { useEffect, useState } from "react"
import { NavigationBar } from "../components/NavBar"
import { GetUserSession } from "../api/generalAPI"
import { useNavigate , Link} from "react-router-dom"
import { MiniHeader } from "../components/miniHeader"
import { useLocation } from 'react-router-dom';
import { GetLessons } from "../api/userAPI"

export const LessonPage =()=>{
    const navigate = useNavigate()
    const [user,setUser] = useState()
    const [role,setRole] = useState()
    const [content,setContent] = useState()
    // const [courseId,setCourseId] = useState()
    // const [part,setPart] = useState()
    const [name,setName] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const course = queryParams.get('courseId');
    const part = queryParams.get('part');
    
    useEffect(()=>{
        GetUserSession()
            .then((response)=>{
                console.log(response);
                if(typeof(response.userinfo)==='undefined' || response.userinfo===null){
                    navigate('/')
                }
                else{
                    setUser(response.userinfo)
                    setRole(response.role)
                    setIsLoading(false)
                    GetLessons(course,part)
                            .then(lessonData => {
                                const lessoninfo = lessonData.lesson
                                console.log(lessoninfo.courseid)
                                setContent(lessoninfo.content)
                                setName(lessoninfo.namelesson)
                            })
                }
            })
    },[])
    const extractVideoId = (url) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;}
    const videoId = content ? extractVideoId(content) : null;

    const nextLesson = () => {
        const incrementedPart = String(Number(part) + 1);
        window.location.href = `/lessonpage?courseId=${course}&part=${incrementedPart}`;
    };
    const previousLesson = () => {
        const decrementedPart = String(Number(part) - 1);
        window.location.href = `/lessonpage?courseId=${course}&part=${decrementedPart}`;
    };
    const isPreviousButtonDisabled = part === "0";

    if (isLoading) return <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    return(
        <div>
            <NavigationBar avatar={user.avatar} user={user} role={role}></NavigationBar>
                <MiniHeader avatar={user.avatar} name={user.name} role = {role}></MiniHeader>
                <nav aria-label="breadcrumb" style={{marginLeft:85}}>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/dashboard">DashBoard</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{name}</li>
                    </ol>
                    <div class="container">
                        <div class="row justify-content-center" style={{marginTop:50,backgroundColor:"gray"}}>
                            <div class="col-md-auto">
                            <h2>{name}</h2>
                            </div>
                        </div>
                        
                        <div class="row justify-content-center" style={{marginTop:50}}>
                            <div class="col-md-auto">
                                <div className="body-lesson">
                                    <iframe
                                        style={{ width: '70vw', height: 'calc(70vw * 0.5625)', maxWidth: '100%' }}
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                        </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="btn-group w-100" role="group" aria-label="Button Group">
                        <button className="btn btn-secondary w-100 py-2 btn-3d" style={{
                            border: 'none',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            transform: 'translateY(0)',
                            transition: 'transform 0.2s ease-in-out',
                        }}
                            disabled={isPreviousButtonDisabled}
                        onClick={previousLesson}
                            >Previous</button>
                        
                        <button className="btn btn-primary w-100 py-2 btn-3d" style={{
                            border: 'none',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            transform: 'translateY(0)',
                            transition: 'transform 0.2s ease-in-out',
                        }}
                        onClick={nextLesson}
                            >Next</button>
                    </div>

                </nav>
                <div>

                </div>
        </div>
    )
                


}