import React from 'react'
import {Link } from "react-router-dom";
import { useState } from 'react';


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-hamburger">
          <div className="logo">
            <img
              className="logo-img"
              src="logo-min 3.png"
              alt=""
            />
          </div>
          <div className="hamburger" onClick={()=> setShowMediaIcons(!showMediaIcons)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className= {showMediaIcons?"links-mobile": "links"}>
        {/* <div className= "links-mobile"> */}
          <div className="link-box">
            <Link to="/developer_hub" className="link">Developer Hub</Link>
          </div>
          <div className="link-box">
            <a
              href="https://move-developers-dao.gitbook.io/aptos-move-by-example/"
              className="link"
            >
              Learn
            </a>
          </div>
          <div className="link-box">
            <a id="dashBoard" href="#" onClick="return false" className="link">
              Dashboards
            </a>
            <div id="drop-down" className="drop-down">
              <a
                // style="text-align: center;"
                href="https://move-developers-dao.gitbook.io/aptos-move-by-example/"
                className="link drop-down-element"
              >
                Events Board
              </a>
              <a
                // style="text-align: center;"
                href="#"
                className="link drop-down-element"
              >
                RFP Board
              </a>
            </div>
          </div>
          <div className="link-box">
            <a href="https://linktr.ee/movedevelopers" className="link">
              Socials
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
