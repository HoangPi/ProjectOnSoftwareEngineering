import { useEffect, useState } from "react"

import{ReplySection}from "./replySection"
import { GetComments,EditComment,DeleteComment } from "../../api/userAPI"
import { GetTutors, GetStudents } from "../../api/generalAPI"
export const CommentSection = (props) => {
  const [comments, setComments] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [editedCommentContent, setEditedCommentContent] = useState("");
  const [editedCommentId, setEditedCommentId] = useState("");
  const [editedCommentIndex, setEditedCommentIndex] = useState(-1);
  const [showReplyForm, setShowReplyForm] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tutorsResponse, studentsResponse, commentsWithRepliesResponse] = await Promise.all([
          GetTutors(),
          GetStudents(),
          GetComments(props.chapterid),
        ]);
    
        const tutorsData = tutorsResponse.tutors;
        const studentsData = studentsResponse.students;
        const commentsWithRepliesData = commentsWithRepliesResponse.comments;
    
        const commentsData = commentsWithRepliesData.map((commentWithReplies) => commentWithReplies.comment);
        const repliesData = commentsWithRepliesData.flatMap((commentWithReplies) => commentWithReplies.replies);
    
        // Update findUserById to consider repliesData as well
        
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
    
        const updatedComments = await Promise.all(
          commentsData.map(async (comment) => {
            const userId = comment.userid;
            let user = await FindUserById(tutorsData, studentsData, userId);
            if (user) {
              comment.username = user.name;
              comment.useravatar = user.avatar;
            }
        
            comment.time = calculateTimeDifference(comment.createdAt, comment.updatedAt);
        
            // Update replies for the comment
            const updatedReplies = await Promise.all(
              repliesData.filter((reply) => reply.commentid === comment._id).map(async (reply) => {
                const replyUserId = reply.userid;
                const replyUser = await FindUserById(tutorsData, studentsData, replyUserId);
                if (replyUser) {
                  reply.username = replyUser.name;
                  reply.useravatar = replyUser.avatar;
                }
                reply.time = calculateTimeDifference(reply.createdAt, reply.updatedAt);
                return reply;
              })
            );
            comment.replies = updatedReplies;
        
            return comment;
          })
        );
        

        console.log("check",updatedComments);
    
        setTutors(tutorsData);
        setStudents(studentsData);
        setComments(updatedComments);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [props.chapterid]);
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


  const handleCommentSubmit = () => {
    console.log("Reply edited:", editedCommentContent);
    console.log("Reply edited:", editedCommentId);
    EditComment(editedCommentId,editedCommentContent);
    setEditedCommentIndex(-1); 
    setEditedCommentContent(""); 
    setShowReplyForm(false);
  };

  const handleDeleteComment = () => {
    if (editedCommentIndex >= 0) {
      console.log("Reply deleting:", editedCommentContent);
      console.log("Reply deleting:", editedCommentId);
      DeleteComment(editedCommentId);
      setEditedCommentIndex(-1); 
      setEditedCommentContent(""); 
    }
    setShowReplyForm(false);
  };
  const handleCancelButtonClick = () => {
    setShowReplyForm(false);
    setEditedCommentIndex(-1);
    setEditedCommentContent(""); 
  };
  const handleEditButtonClick = (index) => () => {
    const editedComment = comments[index];
    setEditedCommentId(comments[index]._id);
    console.log("Reply editing:", editedComment);
    setEditedCommentIndex(index);
    setEditedCommentContent(editedComment.content);
  };
  const handleCommentContentChange = (event) => {
    setEditedCommentContent(event.target.value);
    
  };


  if (isLoading) {
    return (
      <div className="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true" />
      </div>
    );
  }

  if (isError || comments.length === 0) {
    return (
      <div>
        <h2>There are no comments yet.</h2>
      </div>
    );
  }

  return (
    <div className="comment-section">
      {comments.map((comment, index) => (
        <div className="row" key={index} style={{ marginTop: '30px' }}>
          {editedCommentIndex === index ? (
              <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex flex-start w-100">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={comment.useravatar}
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
                      value={editedCommentContent}
                      onChange={handleCommentContentChange}
                    ></textarea>
                    <label className="form-label" htmlFor="textAreaExample">
                      Message
                    </label>
                  </div>
                </div>
                <div className="float-end mt-2 pt-1">
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDeleteComment}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleCancelButtonClick}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleCommentSubmit}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Render the reply
              <>
                <div className="col">
                  <div className="d-flex flex-start">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src={comment.useravatar}
                      alt="avatar"
                      width="65"
                      height="65"
                    />
                    <div className="flex-grow-1 flex-shrink-1">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1">
                          {comment.username} <span className="small">- {comment.time}</span>
                        </p>
                        
                      </div>
                      <p className="small mb-0">{comment.content}</p>
                      <div className="edit-comment-btn">
                          {props.userinfo._id === comment.userid && (
                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleEditButtonClick(index)}
                          >
                            Edit
                          </button>
                        )}
                      </div>
                          
                      <ReplySection commentid={comment._id} userreply= {props.userinfo} replies={comment.replies} key={comment._id}></ReplySection>
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>
      ))}
    </div>
  );
};
