import React,{useState} from "react";

function Homepage(){
    const[popularCourse, setPopularCourses] = useState([
        {
            ID: 1,
            title: "Learning C++, is easy or not? Let me help you with it in 82 minutes",
            tutor: {
                ID :1,
                name:"C++ Beginner",
                username:"Ths. Tokuda Sensei",
                dp: "https://i.imgur.com/fzEuoDu.png"
            },
            duration: "82 min",
            poster:"https://i.imgur.com/lCDrBPZ.jpg"

        },

        {
            ID: 2,
            title: "I have seen this movie and was very impressed by the visuals and storytelling. So I want to practice using color, lighting, film composition, reducing shape, and adding my own style as well",
            tutor: {
                ID :3,
                name:"C++ Advance",
                username:"Ths. Tokuda Sensei",
                dp: "https://i.imgur.com/fzEuoDu.png"
            },
            duration: "100 min",
            poster:"https://i.imgur.com/lCDrBPZ.jpg"

        }
    ]);
    const[yourCourses, setyourCourses] = useState([
        {
            ID: 1,
            title: "Learning C++, is easy or not? Let me help you with it in 82 minutes",
            tutor: {
                ID :1,
                name:"C++ Beginner",
                username:"Ths. Tokuda Sensei",
                dp: "https://i.imgur.com/fzEuoDu.png"
            },
            percentage: 0.5,
            duration:"9 hours",
            poster:"https://i.imgur.com/lCDrBPZ.jpg"

        },

        {
            ID: 2,
            title: "So I want to practice using color, lighting, film composition, reducing shape, and adding my own style as well",
            tutor: {
                ID :3,
                name:"C++ Mastery",
                username:"Ths. Tokuda Sensei",
                dp: "https://i.imgur.com/fzEuoDu.png"
            },
            percentage: 0.5,
            duration:"11 hours",
            poster:"https://i.imgur.com/lCDrBPZ.jpg"

        }
    ]);
    const[topTutor, setTopTutor] = useState([
        {
                ID :1,
                name:"Tokuda Sensei",
                username:"@tokudass",
                dp: "https://i.imgur.com/fzEuoDu.png"
            
        },

        {
                ID :2,
                name:"Miyamoto Sensei",
                username:"@miyass",
                dp: "https://i.imgur.com/LVUeWmJ.jpg"
            
        },
        {
            ID :3,
            name:"Tokuda Sensei",
            username:"@tokudass",
            dp: "https://i.imgur.com/fzEuoDu.png"
        
    },

    {
            ID :4,
            name:"Miyamoto Sensei",
            username:"@miyass",
            dp: "https://i.imgur.com/LVUeWmJ.jpg"
        
    },
    {
        ID :5,
        name:"Tokuda Sensei",
        username:"@tokudass",
        dp: "https://i.imgur.com/fzEuoDu.png"
    
    },

    {
        ID :3,
        name:"Miyamoto Sensei",
        username:"@miyass",
        dp: "https://i.imgur.com/LVUeWmJ.jpg"
    
    }
    
    ]);

    var turtorList=[];
    for(let i=0;i<6;i++){
        turtorList.push(
            <button className="tutor rel" key ={"tutor-live-"+i}> 
                <img src="https://i.imgur.com/mO5bMwx.png" className="bl"/>
            </button>
        );
    }

    var coursesList=[];
    for(let i=0;i<popularCourse.length;i++){
        coursesList.push(
            <a href="#" className="courses rel" key ={"popular-courses-"+i}> 
                <div className="block" style={{
                    background: "#bfb5b5 url(" + popularCourse[i].poster + ") no-repeat center"
                }}>
                    <div className="user abs alc flex">
                        <div className="pic">
                            <img src={popularCourse[i].tutor.dp} className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="name s15 fontb cff">{popularCourse[i].tutor.name}</h2>
                            <h2 className="uname s13 fontn cff">{popularCourse[i].tutor.username}</h2>
                            
                        </div>
                    </div>
                    <div className="duration abs">
                        <h2 className="duration s15 fontb cff">{popularCourse[i].duration}</h2>
                    </div>    
                    <div className="course-title abs">
                        <h2 className="course-title-text s15 fontb cff" >{popularCourse[i].title} </h2>
                    </div>


                </div>
                
            </a>
        );
    }
    var yourCoursesList=[];
    for(let i=0;i<yourCourses.length;i++){
        const percentage = Math.floor(yourCourses[i].percentage * 100); // Convert float to percentage

  // Calculate the width of the progress bar
        const progressBarWidth = percentage + "%";
        yourCoursesList.push(
            <a href="#" className="courses rel" key ={"your-courses-"+i}> 
                <div className="block" style={{
                    background: "#bfb5b5 url(" + yourCourses[i].poster + ") no-repeat center"
                }}>
                    <div className="user abs alc flex">
                        <div className="pic">
                            <img src={yourCourses[i].tutor.dp} className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="name s15 fontb cff">{yourCourses[i].tutor.name}</h2>
                            <h2 className="uname s13 fontn cff">{yourCourses[i].tutor.username}</h2>
                            
                        </div>
                    </div>
                    <div className="duration abs">
                        <h2 className="duration s15 fontb cff">{yourCourses[i].duration}</h2>
                    </div>    
                    <div className="course-title abs">
                        <h2 className="course-title-text s15 fontb cff">{yourCourses[i].title}</h2>
                    </div>
                    <div className="progress-bar" style={{ width: progressBarWidth }}>
                        <span className="progress-text s15 fontb cff">{percentage}%</span>
                    </div>

                </div>
                
            </a>
        );
    }
// Top tutor list
    var topTutorList=[];
    for(let i=0;i<topTutor.length;i++){
        topTutorList.push(
            <a href="#" className="user-block rel noul" key ={"top-tutor-"+i}> 
                
                    <div className="user alc flex">
                        <div className="pic">
                            <img src={topTutor[i].dp} className="bl"/>
                        </div>
                        <div className="meta rel">
                            <h2 className="name s15 fontb c33">{topTutor[i].name}</h2>
                            <h2 className="uname s13 fontb c33">{topTutor[i].username}</h2>
                            
                        </div>
                    </div>
                
            </a>
        );
    }

//<img src={"https://i.imgur.com/LVUeWmJ.jpg" + i} className="bl"/>
    return(
        
        <div className="home-page rel">
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Your
                <span className="title2 fontn"> Courses</span>
                </h2> 
                <div className="courses rel flex">
                    {yourCoursesList}
                </div>
            </div>
{/* Popular courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular
                <span className="title2 fontn"> Courses</span>
                </h2> 
                <div className="courses rel flex">
                    {coursesList}
                </div>
            </div>
            {/* Top tutor */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top
                <span className="title2 fontn"> Tutors</span>
                </h2> 
                <div className="top-tutor rel flex">
                    {topTutorList}
                </div>
            </div>

        </div>

        
    )
}

export default Homepage;