import React from 'react'

const Card = () => {
  return (
    <div>
       <section className="cards-section">
        <div className="card-heading">
            <p className="event-para">WHAT WE OFFER</p>
        </div>
        <div className="cards">
            <div className="card">

                <div className="card-content">
                    <img src="card1-removebg-preview.png" alt="" className="card-imgs"/>
                    <h1 className="card-writeUp-head">Build DApps on Aptos</h1>
                    <p   className="card-writeUp-desc">No more need to build alone, join our community to build alongside
                        thousands of other Move developers.</p>
                    <a href="https://aptos.dev/">
                    <button onclick="" className="card-btn">Start Building</button></a>
                </div>

            </div>
            <div className="card">
                <div className="card-content">
                    <img src="card2-removebg-preview.png" alt="" className="card-imgs"/>
                    <h1 className="card-writeUp-head">Learn Move Language: Tutorials and Examples</h1>
                    <p className="card-writeUp-desc">Learn to code in Move language using our in browser step-by-step
                        lessons to take you from basics to building your own fully functional DApps on Aptos.</p>
                        <a href="https://move-developers-dao.gitbook.io/aptos-move-by-example/">
                    <button onclick="openInteractiveMoveCourse()"  className="card-btn">Learn</button></a>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <img src="card3-removebg-preview.png" alt="" className="card-imgs"/>
                    <h1 className="card-writeUp-head">Grants and bounty on Aptos</h1>
                    <p className="card-writeUp-desc">We allow students, DAOs & foundations to host grant programs in the community. Projects are allowed to host bounties on Aptos.
                    </p><a href="#">
                    <button className="special-btns card-btn">Explore</button></a>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <img src="card4-removebg-preview.png" alt="" className="card-imgs"/>
                    <h1 className="card-writeUp-head">Ease the Hiring Process</h1>
                    <p className="card-writeUp-desc">Based on a curated data, hire the perfect fit for your project using
                        our extensive jobs board.</p><a href="">
                    <button className="btn card-btn">Apply</button></a>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <img src="graduation-hat.png" alt="" className="card-imgs"/>
                    <h1 className="card-writeUp-head"><span className="event-des-para-span">#MoveIndia</span> student program</h1>
                    <p className="card-writeUp-desc">Connect with our team and get a chance to become the college
                        ambassador. Hold #MoveLang
                        workshops, hackathons in your college and explore the best in className opportunities in Web3.
                    </p><a href="mailto:movedevelopersdao@gmail.com">
                    <button onclick="mailTo()" className="btn card-btn">Connect</button></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Card
