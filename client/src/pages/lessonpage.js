import { useEffect, useState } from "react"
import { NavigationBar } from "../components/NavBar"
import { GetUserSession } from "../api/generalAPI"
import { useNavigate , Link} from "react-router-dom"
import { MiniHeader } from "../components/miniHeader"
import { useLocation } from 'react-router-dom';
import { GetLessons,AddComment } from "../api/userAPI"
import {CommentSection}from "../components/comment/commentSection"

export const LessonPage =()=>{
    const navigate = useNavigate()
    const [user,setUser] = useState()
    const [role,setRole] = useState()

    const [contents,setContents] = useState([])
    const [seed, setSeed] = useState(1);
    const [chapterInfo,setChapterInfo]= useState([])
    
    const [comment, setComment] = useState('')
    const [showComments,setShowComments] = useState(true)
    const [commentCount, setCommentCount] = useState(0);
    const [isError, setIsError] = useState(false);
    // const [courseId,setCourseId] = useState()
    // const [part,setPart] = useState()

    const [showAnnouncement, setShowAnnouncement] = useState(false);
    const [strBtn, setStrBtn] = useState("Next");
    

    const [alertString,setAlertString]= useState("alert alert-danger")
    const [message,setMessage] = useState("Sorry, this chapter does not have content yet! ")
    const [isLoading,setIsLoading] = useState(true)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const chapter = queryParams.get('chapterId');
    
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
                    GetLessons(chapter)
                            .then(lessonData => {
                                setContents(lessonData.contents)
                                setChapterInfo(lessonData.chapter)
                                console.log("ChapterContentData: ",lessonData.contents);
                                console.log("ChapterInfo: ",lessonData.chapter);
                                if (!lessonData.contents){
                                  setIsError(true);
                                }
                            }).catch((error) => {
                                setIsError(true);
                                setShowComments(false);
                                console.log(error);
                              });
                    
                }
            })
    },[])

    const [contentIndex, setContentIndex] = useState(0);
    const content = contents?.[contentIndex];
    

    const extractVideoId = (url) => {
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;}
    const videoId = content ? extractVideoId(content.content.toString()) : null;

    const nextLesson = () => {
      if(contentIndex === contents.length - 1){
        setStrBtn("Go Home");
        setShowAnnouncement(true);
      }else if (showAnnouncement){
        navigate(`/coursedetail?courseId=${chapterInfo.course}`);
      }else
      setStrBtn("Next");
      setContentIndex((prevIndex) => prevIndex + 1);
    };
    
    const previousLesson = () => {
      setStrBtn("Next");
      setShowAnnouncement(false);
      setContentIndex((prevIndex) => prevIndex - 1);
    };
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
    const addComment = () => {
      if (comment !== "") {
        AddComment(comment, user._id, chapter);
        setComment('');
        setCommentCount((prevCount) => prevCount + 1); // Increment comment count
      }
    };
    const reset = () => {
      setSeed(Math.random());
  }
    
    let isNextButtonDisabled = false;
    if(isError){
      isNextButtonDisabled = true;
    }
    const isPreviousButtonDisabled = contentIndex === 0;
    if (isLoading) return <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    return(
        <div>
      <NavigationBar avatar={user?.avatar} user={user} role={role}></NavigationBar>
      <MiniHeader avatar={user?.avatar} name={user?.name} role={role}></MiniHeader>
      <nav aria-label="breadcrumb" style={{ marginLeft: 85 , textDecoration:"none",color:"inherit"}}>
        <style>
            {`
            a {color: inherit;text-decoration: none;}
            a:hover {text-decoration: none;background-color:#daf0ff;border-radius:30px}
            `}
        </style>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/dashboard">DashBoard</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {chapterInfo.name}
          </li>
        </ol>
      </nav>
      {isError ? (
        <>
          <div class="container">
            <div class={alertString} role="alert">
              {message}
            </div>
          </div>
        </>
      ) : (
        <div>
          {isLoading ? (
            <div class="d-flex align-items-center">
              <strong role="status">Loading...</strong>
              <div class="spinner-border ms-auto" aria-hidden="true"></div>
            </div>
          ) : (
            <div class="container">
                        <div class="row justify-content-center" style={{marginTop:50,marginBottom:50,backgroundColor:"gray"}}>
                            <div class="col-md-auto">
                            <h2>{chapterInfo.name}</h2>
                            </div>
                        </div>
                        {showAnnouncement ? (
                          <div class="container">
                          <div class="alert alert-primary" role="alert">
                          Congratulations! You have finished this chapter lesson.
                          </div>
                        </div>
                        ):(
                        <>
                        <div class="row justify-content-center" style={{marginTop:50}}>
                            <div className="col-md-auto">
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
                          </>
                          )}
                    </div>
          )}
        </div>
      )}
      <div className="button-group-container" style={{ width: '80%', margin: '50px auto' }}>
            <div className="btn-group w-100" role="group" aria-label="Button Group" >
                <button
                  className="btn btn-secondary w-100 py-2 btn-3d"
                  style={{
                    border: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(0)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  disabled={isPreviousButtonDisabled}
                  onClick={previousLesson}
                >
                  Previous
                </button>

                <button
                  className="btn btn-primary w-100 py-2 btn-3d"
                  style={{
                    border: "none",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    transform: "translateY(0)",
                    transition: "transform 0.2s ease-in-out",
                  }}
                  disabled={isNextButtonDisabled}
                  onClick={nextLesson}
                >
                  {strBtn}
                </button>
              </div>
          </div>
          <section className="gradient-custom">
            <div className="container my-5 py-5">
              <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex flex-start w-100">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={user?.avatar}
                    alt="avatar"
                    width="40"
                    height="40"
                  />
                  <div className="form-outline w-100">
                    <textarea
                      className="form-control"
                      id="textAreaExample"
                      rows="4"
                      style={{ background: '#fff' }}
                      value={comment}
                      onChange={handleCommentChange}
                    ></textarea>
                    <label className="form-label" htmlFor="textAreaExample">
                      Message
                    </label>
                  </div>
                </div>
                <div className="float-end mt-2 pt-1">
                  <button type="button" className="btn btn-primary btn-sm" onClick={addComment}>
                    Post comment
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section class="gradient-custom">
            <div class="container my-5 py-5">
              {showComments && (
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12 col-lg-10 col-xl-8">
                        <div class="card">
                            <div class="card-body p-4">
                                <h4 class="text-center mb-4 pb-2">Chapter Discussion</h4>
                                <CommentSection chapterid={chapter} userinfo = {user} key={seed}> </CommentSection>
                            </div>
                        </div>
                    </div>
                </div>
              )}
            </div>
          </section>
    </div>
    )
}