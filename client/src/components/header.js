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
        <button className="open-sidebar-btn" onClick={toggleSidebar}>
        Open Sidebar
      </button>
            <Sidebar sidebarVisible={sidebarVisible} />
        </div>
      
    </div>
  );
}

export default HeadBar;