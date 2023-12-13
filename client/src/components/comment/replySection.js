import { useEffect, useState, useReducer } from "react";
import { AddReply,DeleteReply,EditReply } from "../../api/userAPI";

export const ReplySection = (props) => {
  const [seed, setSeed] = useState(1);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [editedReplyIndex, setEditedReplyIndex] = useState(-1);
  const [editedReplyId, setEditedReplyId] = useState("");
  const [editedReplyContent, setEditedReplyContent] = useState("");

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleReplyButtonClick = () => {
    setShowReplyForm(true);
    setEditedReplyIndex(-1);
    setReplyContent("");
  };

  const handleCancelButtonClick = () => {
    setShowReplyForm(false);
    setEditedReplyIndex(-1);
    setReplyContent(""); 
  };

  const handleReplyContentChange = (event) => {
    if (editedReplyIndex >= 0) {
      setEditedReplyContent(event.target.value);
    } else {
      setReplyContent(event.target.value);
    }
  };

  const handleReplySubmit = () => {
    if (editedReplyIndex >= 0) {
      console.log("Reply edited:", editedReplyContent);
      console.log("Reply edited:", editedReplyId);
      EditReply(editedReplyId,editedReplyContent);
      setEditedReplyIndex(-1); 
      setEditedReplyContent(""); 
    } else {
      console.log("Reply submitted:", replyContent);
      AddReply(replyContent, props.userreply._id, props.commentid);
      setReplyContent("");
    }
    reset();
    setShowReplyForm(false);
  };

  const handleDeleteReply = () => {
    if (editedReplyIndex >= 0) {
      console.log("Reply deleting:", editedReplyContent);
      console.log("Reply deleting:", editedReplyId);
      DeleteReply(editedReplyId);
      setEditedReplyIndex(-1); 
      setEditedReplyContent(""); 
    }
    reset();
    setShowReplyForm(false);
  };

  const handleEditButtonClick = (index) => {
    const editedReply = props.replies[index];
    setEditedReplyId(props.replies[index]._id);
    console.log("Reply editting:", editedReply);
    setEditedReplyIndex(index);
    setEditedReplyContent(editedReply.content);
  };

  const reset = () => {
    setSeed(Math.random());
  };

  return (
    <div key={seed}>
      <div className="d-flex flex-row-reverse bd-highlight">
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={handleReplyButtonClick}
        >
          Reply
        </button>
      </div>
      {showReplyForm && (
        <div
          className="card-footer py-3 border-0"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="d-flex flex-start w-100">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src={props.userreply.avatar}
              alt="avatar"
              width="40"
              height="40"
            />
            <div className="form-outline w-100">
              <textarea
                className="form-control"
                id="textAreaExample"
                rows="4"
                style={{ background: "#fff" }}
                value={editedReplyIndex >= 0 ? editedReplyContent : replyContent}
                onChange={handleReplyContentChange}
              ></textarea>
              <label className="form-label" htmlFor="textAreaExample">
                Message
              </label>
            </div>
          </div>
          <div className="float-end mt-2 pt-1">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <button
                type="button"
                class="btn btn-outline-primary"
                onClick={handleCancelButtonClick}
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleReplySubmit}
              >
                {editedReplyIndex >= 0 ? "Edit" : "Reply"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="reply-content" key={seed}>
        {props.replies.map((reply, index) => (
          <div class="d-flex flex-start mt-4" key={index}>
            {editedReplyIndex === index ? (
              <div className="card-footer py-3 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex flex-start w-100">
                  <img
                    className="rounded-circle shadow-1-strong me-3"
                    src={reply.useravatar}
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
                      value={editedReplyContent}
                      onChange={handleReplyContentChange}
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
                      onClick={handleDeleteReply}
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
                      onClick={handleReplySubmit}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Render the reply
              <>
                <a class="me-3" href="#">
                  <img
                    class="rounded-circle shadow-1-strong"
                    src={reply.useravatar}
                    alt="avatar"
                    width="65"
                    height="65"
                  />
                </a>
                <div class="flex-grow-1 flex-shrink-1">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class={`mb-1 ${reply.role === 'tutor' ? 'text-primary' : ''}`}>
                      {reply.username}<span class="small"> - {reply.time}</span>
                    </p>
                    {props.userreply._id === reply.userid && (
                          <button
                          type="button"
                          class="btn btn-link btn-sm"
                          onClick={() => handleEditButtonClick(index)}
                        >
                          Edit
                        </button>
                        )}

                  </div>
                  <p class="small mb-0">{reply.content}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};