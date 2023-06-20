import React from "react";
import Nav from "./Nav";
import {Link } from "react-router-dom";
import Footer from "../components/Footer";
import '../Home.css';

  //   let docsBtn = document.getElementById('docs-btn');
  //   let tutsBtn = document.getElementById('tuts-btn');
  //   let codeBtn = document.getElementById('code-btn');
  //   let envBtn = document.getElementById('env-btn');
  //   let toolsBtn = document.getElementById('tools-btn');
    
  //   docsBtn.addEventListener('click',()=>{
  //     home.style.color = 'white';
  //     docs.style.color = '#706DFF';
  //     code.style.color = 'white';
  //     env.style.color = 'white';
  //     tools.style.color = 'white';
  //     homeSection.style.display = 'none';
  //     docsSection.style.display = 'block';
  //     tutsSection.style.display = 'none'
  //     codeSection.style.display = 'none';
  //     envSection.style.display = 'none';
  //     toolsSection.style.display = 'none';
  //     footerSection.style.marginTop = '200px';
  //     if(navBarModification == true){
  //         navLinks.style.display = 'none';
  //     }
  // })

  // codeBtn.addEventListener('click', ()=>{
  //     home.style.color = 'white';
  //     docs.style.color = 'white';
  //     code.style.color = '#706DFF';
  //     env.style.color = 'white';
  //     tools.style.color = 'white';
  //     homeSection.style.display = 'none';
  //     docsSection.style.display = 'none';
  //     tutsSection.style.display = 'none'
  //     codeSection.style.display = 'block';
  //     envSection.style.display = 'none';
  //     toolsSection.style.display = 'none';
  //     footerSection.style.marginTop = '200px';
  //     if(navBarModification == true){
  //         navLinks.style.display = 'none';
  //     }
  // })

  // envBtn.addEventListener('click', ()=>{
  //     home.style.color = 'white';
  //     docs.style.color = 'white';
  //     code.style.color = 'white';
  //     env.style.color = '#706DFF';
  //     tools.style.color = 'white';
  //     homeSection.style.display = 'none';
  //     docsSection.style.display = 'none';
  //     tutsSection.style.display = 'none'
  //     codeSection.style.display = 'none';
  //     envSection.style.display = 'block';
  //     toolsSection.style.display = 'none';
  //     footerSection.style.marginTop = '200px';
  //     if(navBarModification == true){
  //         navLinks.style.display = 'none';
  //     }
  // })

  // toolsBtn.addEventListener('click', ()=>{
  //     home.style.color = 'white';
  //     docs.style.color = 'white';
  //     code.style.color = 'white';
  //     env.style.color = 'white';
  //     tools.style.color = '#706DFF';
  //     homeSection.style.display = 'none';
  //     docsSection.style.display = 'none';
  //     tutsSection.style.display = 'none'
  //     codeSection.style.display = 'none';
  //     envSection.style.display = 'none';
  //     toolsSection.style.display = 'block';
  //     footerSection.style.marginTop = '200px';
  //     if(navBarModification == true){
  //         navLinks.style.display = 'none';
  //     }
  // })

  // tutsBtn.addEventListener('click', ()=>{
  //     home.style.color = 'white';
  //     docs.style.color = 'white';
  //     code.style.color = 'white';
  //     env.style.color = 'white';
  //     tools.style.color = 'white';
  //     tuts.style.color = '#706DFF';
  //     homeSection.style.display = 'none';
  //     docsSection.style.display = 'none';
  //     tutsSection.style.display = 'block'
  //     codeSection.style.display = 'none';
  //     envSection.style.display = 'none';
  //     toolsSection.style.display = 'none';
  //     footerSection.style.marginTop = '200px';
  //     if(navBarModification == true){
  //         navLinks.style.display = 'none';
  //     }
  // })

const Developer_hub = () => {
  return (
    <div>
      <Nav />
      <div>
        <section>
          <section className="main">
            <div className="main-text-area">
              <div className="main-text-box">
                <img
                  src="Aptos_Primary_WHT 3.png"
                  className="aptos-logo"
                  alt=""
                />
                <h1 className="text-box-head-text">Move Developer Resources</h1>
                <h1 className="text-box-sub-text">
                  A guide to Aptos & Move Language by Move Developers DAO.
                </h1>
              </div>
            </div>
            <div className="main-img-box">
              <img src="Other 07.png" className="main-img" alt="" />
            </div>
          </section>

          <section className="cards-section">
            <div className="cardNUM">
              <img src="Camera angle 02 1.png" className="card-img" alt="" />
              <h1 className="card-head-text">Learn Move On Aptos</h1>
              <h1 className="card-sub-text">
                Check the core #MoveLang concepts on official docs
              </h1>
              <Link to="/docs">
                <h1 className="card-link" id="docs-btn">
                  Learn
                </h1>
              </Link>
            </div>
            <div className="cardNUM">
              <img src="3.png" className="card-img" alt="" />
              <h1 className="card-head-text">Explore Tutorials</h1>
              <h1 className="card-sub-text">
                Curated list of various tutorials by contributors
              </h1>
              <Link to="/tutorials">
              <h1 className="card-link" id="tuts-btn">
                Explore Tutorials
              </h1>
              </Link>
            </div>
            <div className="cardNUM">
              <img
                src="designed laptop.png"
                className="card-img designed-laptop"
                alt=""
              />
              <h1 className="card-head-text">Play with code</h1>
              <h1 className="card-sub-text">
                Learn using hands on interactive quests, playground
              </h1>
              <Link to="/learn">
              <h1 className="card-link" id="code-btn">
                Play With Code
              </h1>
              </Link>
            </div>
            <div className="cardNUM">
              <img src="Other 17.png" className="card-img" alt="" />
              <h1 className="card-head-text">Setup environment</h1>
              <h1 className="card-sub-text">
                Configure your development environment.
              </h1>
              <Link to="/set_up">
              <h1 className="card-link" id="env-btn">
                Set Up
              </h1></Link>
            </div>
            <div className="cardNUM">
              <img src="5 (1).png" className="card-img" alt="" />
              <h1 className="card-head-text">Tools</h1>
              <h1 className="card-sub-text">
                Check various API, SDKs available for developers.
              </h1>
              <Link to="/tools">
              <h1 className="card-link" id="tools-btn">
                Tools
              </h1>
              </Link>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Developer_hub;
