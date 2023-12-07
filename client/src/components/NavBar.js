import { useNavigate } from "react-router-dom"
import { SignOut } from "../api/generalAPI"

export const NavigationBar = (props) => {
    const navigate = useNavigate()
    const handleSignOut=()=>{
        // console.log('Sign Out')
        SignOut()
        navigate('/')
    }
    let role="Student";
    if (props.role==="tutor") role = "Tutor";

    return (
        <nav style={{position:'static',marginBottom:'35px'}} class="navbar bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Udemy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"style={{maxWidth:"300px"}}>
                    <div class="offcanvas-header" style={{backgroundColor:"#b5e2ff"}}>
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" >{role}</h5>
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style={{
                            fontStyle: "italic",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                            direction: "rtl",
                            textAlign: "left",
                            marginRight:"10px",
                        }}>  {props.user.name}</h5>
                        <div class="me-2 position-relative d-flex justify-content-end mt-n5">
                            <a href="/profile">
                                <img src={props.avatar} height='60px' width='60px' class="avatar-xl rounded-circle border border-4 border-black position-relative" alt="avatar" />
                            </a>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" >
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/profile">Profile</a></li>
                                    <li><a class="dropdown-item" href="/dashboard">Dashboard</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li onClick={handleSignOut}><a class="dropdown-item" href="/">Sign out</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}