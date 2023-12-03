import React, { useState,useEffect  } from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetTutors } from "../api/generalAPI"
export const Courses = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tutorName, setTutorName] = useState(null);
  useEffect(() => {
    if (props.tutorid) {
        GetTutors(props.tutorid).then((value)=>{
            setTutorName(value.name)
        }
        ).catch((error) => {
            console.error(`Error fetching ${props.tutorid} tutor:`, error);
          });
    }
  }, [props.tutorid]);
  const openModal = () => {
    if (props.page==="dashboard") {
      
    }else
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="card-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="card" id="courseCard" onClick={openModal} style={{ cursor: 'pointer', flex: '1' }}>
        <img src={props.thumbnail} className="card-img-top" alt="..." />
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
                    <span className="label"style={{width:85,display: 'inline-block'}}>Tutor:</span> {tutorName}
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
                <button type="button" className="btn btn-primary">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
