import React from 'react'

const Section = () => {
  return (
    <div>
      <section className="events">
        <div className="event-heading">
          <h1 className="event-para">EVENTS</h1>
        </div>
        <div className="mytabs">
          {/* <div className="btn-box">
            <div className="event-btn past-btn">Past Events</div>
            <div className="event-btn upcoming-btn">Upcoming Events</div>
          </div> */}

          <div className="event-cards past-event-cards">
            <div className="past-events event-sec">
              <div className="event-card">
                <div className="event-img1">
                  <div className="date-box">
                    <div className="inner-date-box">
                      <p className="date dm">11</p>
                      <p className="month dm">DEC</p>
                    </div>
                  </div>
                </div>
                <div className="event-des">
                  <h1 className="event-des-head">Move Developers Hangout</h1>
                  <h1 className="event-des-para">
                    Here are the glimpses of the first ever{" "}
                    <span className="event-des-para-span">#MoveIndia</span>event
                    that was held in partnership with{" "}
                    <span className="event-des-para-span">@Aptos_Network</span>.
                    We proudly introduced{" "}
                    <span className="event-des-para-span">#MoveLang</span> to
                    60+ developers & enthusiasts who attended the event.
                  </h1>
                  <a href="https://twitter.com/MoveBuilders/status/1604769496862195712?s=20">              
                  <div
                    className="twitter-box exceptional-tweet-box"
                  >
                    <img
                      src="Vector.png"
                      alt=""
                      className="twitter-logo"
                    />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="past-events event-sec">
              <div className="event-card">
                <div className="event-img2">
                  <div className="date-box">
                    <div className="inner-date-box">
                      <p className="date dm">12</p>
                      <p className="month dm">MAR</p>
                    </div>
                  </div>
                </div>
                <div className="event-des">
                  <h1 className="event-des-head">
                    Move Developers workshop and Aptos meetup
                  </h1>
                  <h1 className="event-des-para">
                    Here are the glimpses of the second edition of{" "}
                    <span className="event-des-para-span">#MoveIndia</span>{" "}
                    event. We proudly hosted 70+ builders who attended the
                    <span className="event-des-para-span">#MoveLang</span>
                    development workshop in partnership with{" "}
                    <span className="event-des-para-span">@Aptos_Network</span>
                  </h1>
                  <a href="https://twitter.com/movebuilders/status/1636001346687041536?s=46&t=uGmuP8mHNlf7MNnFWQqcGQ">              
                  <div
                    className="twitter-box exceptional-tweet-box"
                  >
                    <img
                      src="Vector.png"
                      alt=""
                      className="twitter-logo"
                    />
                  </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="past-events event-sec">
              <div className="event-card">
                <div className="event-img3">
                  <div className="date-box">
                    <div className="inner-date-box">
                      <p className="date dm">13</p>
                      <p className="month dm">Apr</p>
                    </div>
                  </div>
                </div>
                <div className="event-des">
                  <h1 className="event-des-head">Move Developers Hangout</h1>
                  <h1 className="event-des-para">
                    We had a blast hosting the first-ever Web3 meetup at{" "}
                    <span className="event-des-para-span">@REVAUniversity</span>{" "}
                    and educating the students on{" "}
                    <span className="event-des-para-span">#MoveLang</span>.
                    Enjoyed awesome talks from{" "}
                    <span className="event-des-para-span">
                      @TheGariNetwork @kudomoney
                    </span>
                    , and discussed about the{" "}
                    <span className="event-des-para-span">#DeFi #gaming</span>{" "}
                    landscape on{" "}
                    <span className="event-des-para-span">@Aptos_Network</span>{" "}
                    during the networking sesh!
                  </h1>
                  <a href="https://twitter.com/MoveBuilders/status/1646859596215074816?t=3D82COsD-hKFpCxyRYpfCg&s=19">
                  <div className="twitter-box" >
                    <img
                      src="Vector.png"
                      alt=""
                      className="twitter-logo"
                    />
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section
