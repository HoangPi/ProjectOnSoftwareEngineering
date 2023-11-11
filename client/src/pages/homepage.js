import React from "react";

function Homepage(){
    var turtorList=[];
    for(let i=0;i<20;i++){
        turtorList.push(
            <button className="tutor rel" key ={"tutor-live"+i}> 
                <img src="https://i.imgur.com/LVUeWmJ.jpg" className="bl"/>
            </button>
        );
    }
//<img src={"https://i.imgur.com/LVUeWmJ.jpg" + i} className="bl"/>
    return(
        <div className="home-page rel">
            <div className="section rel">
                <h2 className="title s24 fontb">Streaming
                <span className="fontn">Now</span>
                </h2> 
                
                


            </div>

        </div>
    )
}

export default Homepage;