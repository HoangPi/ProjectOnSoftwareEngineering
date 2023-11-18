import React , {useState} from "react";
import logo from "../ui/logo_oacademy.svg";





function Sidebar({ sidebarVisible }){
    

    const [nav,setNav] = useState([
        {lab:"Home", slug:"/", icon: "icon-home"},
        {lab:"Discover", slug:"discover", icon: "icon-compass2"},
        {lab:"Category", slug:"category", icon: "icon-books"},
        {lab:"My Courses", slug:"my-courses", icon: "icon-book"}

    ])
    const [currentPage,setCurrentPage] = useState("/");
    var navigation = [];
    for (let i=0;i<nav.length;i++){
            navigation.push(
                <li key={"nav-"+ i +"-"+ nav[i].slug}>
                    <a href={nav[i].slug} className={"link noul flex c33" + (currentPage == nav[i].slug ? " on" : "")}>

                        <div className={"ico s20 " + nav[i].icon}/>

                        <h2 className="lbl s15">{nav[i].lab}</h2>
                    </a>
                </li>
            );
    }

    return(
        <div className={`sidebar rel ${sidebarVisible ? "active" : ""}`}>

            <a herf="#" className="logo">
                <img src={logo} className="bl site-icon"/>
            </a>

            <ul className="nav">
                {navigation}                
            </ul>

            {/* <div className="updated-course flex alc">
                <div className="icon-newspaper ico cff s24"/>
                <div className="lbl s10 fontb c33">
                    UpdatedCourses
                    <h2 className = "author s13 c777">by Principle Moutain Dew</h2>

                </div>

            </div> */}


            <div className="stats flex">
                <div className="stats-box jlc flex">
                    <div className="ico s24 icon-star-full alc jlc"/>
                    <h2 className = "val s10 c777">9.5</h2>
                    <h2 className = "lbl s10 c777">Average Point</h2>
                </div>

                <div className="stats-box jlc flex">
                    <div className="ico s24 icon-checkmark alc jlc"/>
                    <h2 className = "val s10 c777">50%</h2>
                    <h2 className = "lbl s10 c777">Complete</h2>
                </div>
            </div>
            <a href="/profile" className="user-info">
            <div className="user flex alc " >
                <div className="photo cff s24">
                    <img src="https://i.imgur.com/LVUeWmJ.jpg" className="bl"/>
                </div>
                <div className="lbl s15 fontb c33">
                    User
                    <h2 className = "author s13 c777">Hoang Le Tien Dat</h2>

                </div>

            </div>
            </a>
            


        </div>


    )
}
export default Sidebar;