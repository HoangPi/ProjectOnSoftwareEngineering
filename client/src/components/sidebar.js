import React , {useState} from "react";
import logo from "../ui/logo_oacademy.svg";





function Sidebar(){
    

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

                        <div className={"ico s24 " + nav[i].icon}/>

                        <h2 className="lbl s20">{nav[i].lab}</h2>
                    </a>
                </li>
            );
    }

    return(
        <div className = "sidebar fixed">

            <a herf="#" className="logo">
                <img src={logo} className="bl"/>
            </a>

            <ul className="nav">
                {navigation}                
            </ul>

        </div>
    )
}
export default Sidebar;