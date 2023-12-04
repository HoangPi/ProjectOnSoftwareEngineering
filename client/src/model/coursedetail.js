import React from 'react';
import { Link } from "react-router-dom";
export const Courses = (props) => {
    return (
        <div className="course-detail"  >
                <img src={props.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: 30}} >{props.coursename}</h5>
                    <h5 className="card-title" style={{ fontStyle: 'oblique' }} >{props.category}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text-author" style={{ fontStyle: 'italic' }} >Author: {props.tutorid}</p>
                    {/* <Link to={`/research/${research.idresearch}`}>View Research Article</Link> */}
                </div>
        </div>
    )
}