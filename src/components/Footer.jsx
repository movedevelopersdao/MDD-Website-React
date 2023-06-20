import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <footer className="footer">
        <p className="event-para">BUILD WITH US</p>
        <div className="footer-display-div">
          <div className="move-side">
            <img
              className="footer-logo"
              src="logo-min 3.png"
              alt=""
            />
            <p className="move-side-text">Move Developers DAO</p>
          </div>
          <div className="info-side">
            <div className="usefull-links-side info-side-box">
              <p className="useful-links-head-text useful-links-text">
                Useful Links
              </p>
              <div className="useful-links">
                <a href="https://move-developers-dao.gitbook.io/aptos-move-by-example/">
                <p
                  className="useful-links-text"
                >
                  GitBook
                </p>
                </a>
                <p className="useful-links-text">Jobs</p>
                <a href="https://github.com/movedevelopersdao">
                <p className="useful-links-text">
                  GitHub
                </p>
                </a>
              </div>
            </div>
            <div className="follow-us info-side-box">
              <p className="useful-links-head-text useful-links-text">
                Follow Us
              </p>
              <div className="follow-us-imgs">
                <a href="https://www.linkedin.com/company/move-developers-dao/">
                <img
                  className="follow-us-img"
                  src="linkedin.png"
                  alt=""
                />
                </a>
                <a href="https://twitter.com/MoveBuilders">
                <img
                  className="follow-us-img"
                  src="twitter.png"
                  alt=""
                />
                </a>
                <a href="https://discord.com/invite/AVr5u59tXs">
                <img
                  className="follow-us-img"
                  src="discord.png"
                  alt=""
                />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-terms">
          &#174 2022 All Rights Reserved Terms of Services
        </p>
      </footer>
    </div>
  )
}

export default Footer
