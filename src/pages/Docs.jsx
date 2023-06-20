import React from "react";
import Nav from "./Nav";
import Footer from "../components/Footer";
import '../Home.css';

const Docs = () => {
  return (
    <div>
      <Nav />
      <div>
        <section>
          <div class="section-description">
            <h1 class="sec-desc-head-text">APTOS DEVELOPMENT DOCUMENTATIONS</h1>
            <h1 class="sec-desc-sub-text">
              Welcome to the documentation section, go through these all in one
              guides for starting your Move Language journey.
            </h1>
          </div>

          <section class="doc-cards-section">
            <div class="doc-card">
              <div class="doc-card-img-container">
                <img src="aptos.png" class="doc-card-img" alt="" />
              </div>
              <h1 class="doc-card-head-text">Aptos Docs</h1>
              <h1 class="doc-card-sub-text">
                Learn Move using official Aptos documentation
              </h1>
              <a href="https://aptos.dev/">
              <h1
                class="doc-card-link"
              >
                Aptos Docs
              </h1></a>
            </div>
            <div class="doc-card">
              <div class="doc-card-img-container">
                <img
                  src="logo-min 3.png"
                  class="doc-card-img move-logo-2"
                  alt=""
                />
              </div>
              <h1 class="doc-card-head-text">Move By Example</h1>
              <h1 class="doc-card-sub-text">
                A complimentary Move resource (similar to solidity by example)
                with concepts, applications, hacks and more by Move Developers
                DAO{" "}
              </h1>
              <a href="https://github.com/movedevelopersdao/Aptos-Move-by-Example">
              <h1
                class="doc-card-link"
              >
                Move By Example
              </h1></a>
            </div>
            <div class="doc-card">
              <div class="doc-card-img-container">
                <img
                  src="github-logo.png"
                  class="doc-card-img github-logo"
                  alt="/"
                />
              </div>
              <h1 class="doc-card-head-text">Move Book</h1>
              <h1 class="doc-card-sub-text">
                The first Move Language Book by Diem with all concepts
              </h1>
              <a href="https://move-book.com/">
              <h1
                class="doc-card-link"
              >
                Move Book
              </h1></a>
            </div>
          </section>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Docs;
