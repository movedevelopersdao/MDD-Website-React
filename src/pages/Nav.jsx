import React from 'react'
import {Link } from "react-router-dom";
import '../Home.css';
import { useState } from 'react';

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-hamburger">
          <div className="logo">
          <Link to="/">
            <img src="logo-min 3.png" className="move-logo" alt="" /></Link>
          </div>
          <div className="hamburger" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className={showMediaIcons?"nav-links-mobile":"nav-links"}>
        {/* <div className= {showMediaIcons?"links-mobile": "links"}> */}

          {/* <a href="/home" className="nav-link" id="home">
            Home
          </a> */}
          <Link to="/developer_hub" className="nav-link">Home</Link>
          <Link to="/docs" className="nav-link">Docs</Link>
          <Link to="/tutorials" className="nav-link">Tutorials</Link>
          <Link to="/learn" className="nav-link">Learn By Code</Link>
          <Link to="/set_up" className="nav-link">Set Up Environment</Link>
          <Link to="/tools" className="nav-link">Tools</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
