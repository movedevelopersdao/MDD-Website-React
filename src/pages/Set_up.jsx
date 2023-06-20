import React from "react";
import Nav from "./Nav";
import Footer from "../components/Footer";
import '../Home.css';

const Set_up = () => {
  return (
    <div>
      <Nav />
      <div>
        <section>
          <div className="section-description">
            <h1 className="sec-desc-head-text">SET UP ENVIRONMENT</h1>
            <h1 className="sec-desc-sub-text">
              {" "}
              Start building smart contracts on Move in a hassle free way using
              these online IDEs.
            </h1>
          </div>

          <section className="doc-cards-section">
            <div className="doc-card env-card">
              <div className="doc-card-img-container learn-by-code-logo-box">
                <img src="move playground.png" className="doc-card-img" alt="" />
              </div>
              <h1 className="doc-card-head-text env-card-head-text">
                Move Playground
              </h1>
              <h1 className="doc-card-sub-text code-card-sub-text">
                Online IDE for building and testing smart contracts in browsers.
              </h1><a href="https://playground.pontem.network/">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
            {/* <div className="doc-card">
              <div className="doc-card-img-container learn-by-code-logo-box">
                <img src="aptos.png" className="doc-card-img github-logo" alt="" />
              </div>
              <h1 className="doc-card-head-text">Remix Plugin</h1>

              <h1
                className="doc-card-link"
                onclick="openLink('https://aptos.dev/community/contributions/remix-ide-plugin')"
              >
                Enter
              </h1>
            </div> */}
            <div className="doc-card env-card">
              <div className="doc-card-img-container se-by-code-logo-box">
                <img
                  src="chain ide.png"
                  className="se-card-img github-logo"
                  alt=""
                />
              </div>
              <h1 className="doc-card-head-text env-card-head-text">Chain IDE</h1>
              <h1 className="doc-card-sub-text code-card-sub-text">
                Cloud based Multi-Chain IDE{" "}
              </h1><a href="https://chainide.com/">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
            <div className="doc-card env-card">
              <div className="doc-card-img-container se-by-code-logo-box">
                <img
                  src="welldone developer.png"
                  className="se-card-img github-logo"
                  alt=""
                />
              </div>
              <h1 className="doc-card-head-text env-card-head-text">
                WellDone Remix Plugin
              </h1>
              <h1 className="doc-card-sub-text code-card-sub-text">
                Deploy and run Move smart contracts on Remix IDE using Welldone
                plugin.
              </h1><a href="https://docs.welldonestudio.io/code/deploy-and-run/aptos">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Set_up;
