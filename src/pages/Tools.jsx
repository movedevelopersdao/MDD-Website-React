import React from "react";
import Nav from "./Nav";
import Footer from "../components/Footer";
import '../Home.css';

const Tools = () => {
  return (
    <div>
      <Nav />
      <div>
        <section>
          <div className="section-description">
            <h1 className="sec-desc-head-text">APTOS DEVELOPMENT TOOLS</h1>
            <h1 className="sec-desc-sub-text">
              {" "}
              Take your Aptos journey to the next level using these tools.
            </h1>
          </div>

          <section className="doc-cards-section">
            <div className="doc-card">
              <div className="doc-card-img-container">
                <img src="aptos.png" className="doc-card-img" alt="" />
              </div>
              <h1 className="doc-card-head-text">Aptos Explorer</h1>
              <h1 className="doc-card-sub-text">Aptos chain explorer.</h1>
              <a href="https://explorer.aptoslabs.com/?network=mainnet">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
            <div className="doc-card">
              <div className="doc-card-img-container se-by-code-logo-box">
                <img
                  src="aptools.png"
                  className="se-card-img github-logo aptools"
                  alt=""
                />
              </div>
              <h1 className="doc-card-head-text">Aptools</h1>
              <h1 className="doc-card-sub-text">Chain analytics for Aptos.</h1>
              <a href="https://aptools.io/">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
            <div className="doc-card">
              <div className="doc-card-img-container">
                <img src="aptos.png" className="doc-card-img github-logo" alt="" />
              </div>
              <h1 className="doc-card-head-text">Aptos CLI</h1>
              <h1 className="doc-card-sub-text">
                This tool is a command line interface (CLI) for developing on
                the Aptos blockchain, debugging, and for node operations.
              </h1><a href="https://aptos.dev/tools/aptos-cli-tool/use-aptos-cli">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
          </section>

          <section className="doc-cards-section">
            <div className="doc-card">
              <div className="doc-card-img-container">
                <img src="aptos.png" className="doc-card-img github-logo" alt="" />
              </div>
              <h1 className="doc-card-head-text">Aptos SDKs</h1>
              <h1 className="doc-card-sub-text">
                {" "}
                Rust, Python, Typescript, Unity SDKs for development on Aptos
              </h1><a href="https://aptos.dev/sdks/index">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>
            <div className="doc-card">
              <div className="doc-card-img-container se-by-code-logo-box">
                <img
                  src="blast api.png"
                  className="doc-card-img blast-img"
                  alt=""
                />
              </div>
              <h1 className="doc-card-head-text">Blast API</h1>
              <h1 className="doc-card-sub-text">
                {" "}
                Infrastructure and APIs for Aptos by Bware labs
              </h1><a href="https://blastapi.io/">
              <h1
                className="doc-card-link"
              >
                Enter
              </h1></a>
            </div>

            <div className="doc-card">
              <div className="doc-card-img-container">
                <img src="moralis" className="doc-card-img github-logo" alt="" />
              </div>
              <h1 className="doc-card-head-text">Moralis SDKs</h1>
              <h1 className="doc-card-sub-text">
                Infrastructure and APIs for Aptos by Moralis
              </h1><a href="https://moralis.io/chains/aptos/">
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

export default Tools;
