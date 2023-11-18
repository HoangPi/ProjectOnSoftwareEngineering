import React, { useState } from "react";
import Sidebar from "./sidebar";

function HeadBar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    const appContent = document.querySelector('.app-content');
    appContent.style.marginLeft = sidebarVisible ? '0' : '300px';
  };

  return (
    <div>
      <div className="headbar">
        <nav style={{ alignContent: 'center' }} className="navbar navbar-expand-lg ">
          <div style={{ width: '90%' ,height:'45px'}} className="container-fluid">
            <div className="d-flex align-items-center">
              <div className={`open-sidebar-btn ${sidebarVisible ? 'active' : ''}`} onClick={toggleSidebar}>
                <div className="icon-list ico-sidebar c33 s24" />
              </div>
              <a className="navbar-brand cff" href="/">Online Academy</a>
              
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-header" id="navbarSupportedContent">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-search" type="submit">Search</button>
              </form>
              <ul style={{ marginLeft: '50%', marginRight: '10%' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/signup">Sign in</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <Sidebar sidebarVisible={sidebarVisible} />
      </div>
    </div>
  );
}

export default HeadBar;