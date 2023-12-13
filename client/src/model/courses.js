import React, { useState,useEffect  } from 'react';
import { useNavigate , Link} from "react-router-dom"
import {RegisterCourse} from "../api/userAPI"
export const Courses = (props) => {
  const navigate = useNavigate()
  const [modalVisible, setModalVisible] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  
  useEffect(() => {
    if (props.page!=="dashboard") {
      if (props.studentsid.includes(props.userid)) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    }
  }, [props.studentsid, props.userid]);

  
  const openModal = (event) => {
    
    if (props.page==="dashboard"||props.userrole==="tutor") {
      navigate(`/coursedetail?courseId=${props.courseid}`);
    }else
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const registerBtn=async ()=>{
    if(props.userid!=""){
      const response = await RegisterCourse(props.userid, props.courseid);
      if (response.message) {
        window.alert(response.message);
        if (response.success) {
          window.location.reload();
        }
      } else {
        window.alert('Failed to register for the course.');
      }
    }
    else{
      window.location.href = '/signin';
    }
  };

  return (
    <div className="card-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card" id="courseCard" onClick={openModal} style={{ cursor: 'pointer', flex: '1' }}>
        <img src={props.thumbnail} className="card-img-top" alt="..." style={{height:250,objectFit:'cover'}} />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: 30, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} >
            {props.coursename}
          </h5>
          <h5 className="card-title" style={{ fontStyle: 'oblique' }}>
            {props.category}
          </h5>
          <p className="card-text">{props.level}</p>
          
          {/* Additional details or actions can be added here */}
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Detail Course
                </h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <img src={props.thumbnail} className="card-img-top" style={{borderRadius:20}} alt="..." />
                <h5 className="card-title" style={{ fontSize: 30 }} >
                    {props.coursename}
                </h5>
                <p className="card-text">
                    <span className="label" style={{width:85,display: 'inline-block'}}>Level:</span> {props.level}
                </p>
                <p className="card-text">
                    <span className="label"style={{width:85,display: 'inline-block'}}>Tutor:</span> {props.tutorname}
                </p>
                <p className="card-text">
                    <span className="label"style={{width:85,display: 'inline-block'}}>Description:</span> {props.description}
                </p>
                <p className="card-text">
                    <span className="label"style={{width:85,display: 'inline-block'}}>Registered:</span> {props.studentsid.length} students
                </p>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                {isRegistered ? (
                  <button type="button" className="btn btn-success" disabled>
                    Registered
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={registerBtn}>
                    Register
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
