import React from 'react'

const Main = () => {
  return (
    <div>
      <section className="main">
        <div className="main-text">
          <div id="intro">
            <p>
              Join the world's best Move Language developer community at Move
              Developers DAO.
            </p>
          </div>
          <div id="main-para">
            <p>
              Get resources, tutorials, and upd
              
              ates on the latest developments
              in Aptos ecosystem. Start building on{" "}
              <span id="hashTag">#MoveLang</span> today!
            </p>
          </div>
          <div className="main-buttons">      
            <a href="http://surl.li/feabz">
              <button className="btns">Events</button>
            </a>
            <a href="https://discord.com/invite/AVr5u59tXs">
              <button className="btns">Community</button>
            </a>
          </div>
        </div>
        <div className="main-img-box">
          <img className="main-img" src="03 2.png" alt="" />
        </div>
      </section>
    </div>
  )
}

export default Main
