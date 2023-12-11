import { useEffect, useState } from "react"

import{ReplySection}from "./replySection"
import { GetComments } from "../../api/userAPI"
import { GetTutors, GetStudents } from "../../api/generalAPI"
export const CommentSection = (props)=> {
    const [comments,setComments] = useState([])
    const [tutors, setTutors] = useState([]);
    const [students, setStudent] = useState([]);
    const [isLoading,setIsLoading] = useState("null")
    const [isError, setIsError] = useState(false);
    const [timeDif,setTimeDif]=useState([]);

    
    useEffect(() => {
        Promise.all([ GetTutors(),GetStudents()])
          .then(([ tutorsRespose, studentsResponse]) => {
            const students = studentsResponse.students;
            const tutors = tutorsRespose.tutors;
    
            console.log("Fetched students:", students);
            console.log("Fetched tutors:", tutors);
            GetCommentsWithUserInfo(props.lessonid,students,tutors)
            
          })
          .catch((error) => {
            setIsError(true);
            console.error("Error fetching categories and courses:", error);
          });
          
      }, [props.lessonid]);
    const GetCommentsWithUserInfo = async (lessonId, students, tutors) => {
    try {
        const commentsResponse = await GetComments(lessonId); // Call your existing GetComments function
        const commentsdata= commentsResponse.comments;
        console.log("Fetched comments:", commentsdata);
        if (!commentsResponse) {
          throw new Error("Comments response is undefined");
        }
        const updatedComments = await Promise.all(
            commentsdata.map(async (comment) => {
              const userId = comment.userid;
              comment.time=calculateTimeDifference(comment.updatedAt,comment.createdAt);
              let user = FindUserById(tutors,students, userId);
              user = await user;
              
              comment.username = user.name;
              comment.useravatar = user.avatar;
              return comment;
            })
          );
        
        setComments(updatedComments);
    } catch (error) {
        setIsError(true);
        
    }
    };
    
    // if (isLoading) return <div class="d-flex align-items-center">
    //     <strong role="status">Loading...</strong>
    //     <div class="spinner-border ms-auto" aria-hidden="true"></div>
    // </div>
   
      const FindUserById = async (tutorslist,studentslist,userid) => {
        try {
            const tutor = tutorslist.find((tutor) => tutor._id.toString() === userid);
            const student = studentslist.find((student) => student._id.toString() === userid);
          return student || tutor
        } catch (error) {
          // Handle errors
          console.error(error);
          return null;
        }
      }; 
      const calculateTimeDifference = (timestamp,createtime) => {
        const commentTime = new Date(timestamp);
        let stringUpdate="Created "
        if (timestamp!=createtime) {
            stringUpdate="Updated ";
        }
        const currentTime = new Date();
      
        const timeDifference = currentTime - commentTime;
      
        // Calculate the time difference in minutes
        const minutesDifference = Math.floor(timeDifference / 60000);
      
        // Calculate the time difference in hours
        const hoursDifference = Math.floor(timeDifference / 3600000);
      
        // Calculate the time difference in days
        const daysDifference = Math.floor(timeDifference / 86400000);
      
        // Return the time difference in an appropriate format
        if (daysDifference > 0) {
          return `${stringUpdate}  ${daysDifference} day(s) ago`;
        } else if (hoursDifference > 0) {
          return `${stringUpdate}  ${hoursDifference} hour(s) ago`;
        } else {
          return `${stringUpdate}  ${minutesDifference} minute(s) ago`;
        }
      };

    if(isError)
        return(
            <div>
                <h2>There is no comment yet</h2>
            </div>
            
        )
    return(
        <div className="comment-section">
            {comments.map((value, key) => (
                <div class="row" key = {key} style={{marginTop:"30px"}}>
                    <div class="col">
                        <div class="d-flex flex-start">
                            <img class="rounded-circle shadow-1-strong me-3"
                                src={value.useravatar} alt="avatar" width="65"
                                height="65" />
                            <div class="flex-grow-1 flex-shrink-1">
                                <div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="mb-1">
                                        {value.username} <span class="small">- {value.time}</span>
                                        </p>
                                        <a href="#!"><i class="fas fa-reply fa-xs"></i><span class="small"> reply</span></a>
                                    </div>
                                    <p class="small mb-0">
                                        {value.content}
                                    </p>
                                </div>
                                <ReplySection></ReplySection>
                            </div>
                        </div>
                    </div>
                </div>                                                           
            ))}
        </div>
    )
}