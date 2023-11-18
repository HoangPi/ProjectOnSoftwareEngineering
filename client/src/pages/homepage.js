import React, { useEffect, useState } from "react";
import { GetUserSession, SignOut } from "../api/generalAPI.js"
import {DefaultNavBar} from "../components/defaultNavBar.js"
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../components/NavBar.js";

function Homepage() {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [role,setRole]=useState()
    const [hasSession,setHasSession]=useState(false)
    useEffect(() => {
        GetUserSession()
            .then(respone => {
                console.log(respone)
                if(respone.userinfo!==null && typeof(respone.userinfo)!=='undefined'){
                    console.log(respone.userinfo)
                    setUser(respone.userinfo)
                    setRole(respone.role)
                    setHasSession(true)
                }
                
            })
    },[])

    const handleSignOut=()=>{
        // console.log('Sign Out')
        SignOut()
        navigate('/')
    }

    if(!hasSession) return <DefaultNavBar></DefaultNavBar>
    return (
        <NavigationBar user={user} role={role}>

        </NavigationBar>
        // <nav class="navbar bg-body-tertiary fixed-top">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="/">Udemy</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        //             <div class="offcanvas-header">
        //                 <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hello {role} {user.name}</h5>
        //                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //             </div>
        //             <div class="offcanvas-body">
        //                 <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="/">Home</a>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Account
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="/profile">Profile</a></li>
        //                             <li><a class="dropdown-item" href="/course">Course</a></li>
        //                             <li>
        //                                 <hr class="dropdown-divider" />
        //                             </li>
        //                             <li onClick={handleSignOut}><a class="dropdown-item" href="/">Sign out</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //                 <form class="d-flex mt-3" role="search">
        //                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                     <button class="btn btn-outline-success" type="submit">Search</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </nav>


    )
}

export default Homepage;