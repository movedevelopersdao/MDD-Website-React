import React from "react";
import Nav from "./Nav";
import Footer from "../components/Footer";
import "../Home.css";

const Learn = () => {
  return (
    <div>
      <Nav />
      <div>
        <section>
          <div class="section-description">
            <h1 class="sec-desc-head-text">LEARN WITH CODING</h1>
            <h1 class="sec-desc-sub-text">
              These platforms will help you experiment with Aptos if you prefer
              a more interactive learning experience.
            </h1>
          </div>

          <section class="doc-cards-section code-cards-section">
            <div class="doc-card">
              <div class="doc-card-img-container learn-by-code-logo-box">
                <img
                  src="imcoding 1.png"
                  class="doc-card-img imcoding-img"
                  alt=""
                />
              </div>
              <h1 class="doc-card-head-text">IMCoding Online</h1>
              <h1 class="doc-card-sub-text code-card-sub-text">
                Move Language interactive tutorials (Cryptozombies for Move)
              </h1>
              <a href="https://imcoding.online/">
                <h1
                  class="doc-card-link"
                  // onclick="openLink('https://imcoding.online/')"
                >
                  IMCoding
                </h1>
              </a>
            </div>
            3
            <div class="doc-card">
              <div class="doc-card-img-container se-by-code-logo-box">
                <img src="overmind.png" class="se-card-img overmind" alt="" />
              </div>
              <h1 class="doc-card-head-text">OverMind</h1>
              <h1 class="doc-card-sub-text code-card-sub-text">
                Learn to Earn Move quests and on chain resume with SBTss
              </h1>
              <a href="https://overmind.xyz/">
                <h1
                  class="doc-card-link"
                  // onclick="openLink('https://overmind.xyz/')"
                >
                  OverMind
                </h1>
              </a>
            </div>
            <div class="doc-card">
              <div class="doc-card-img-container se-by-code-logo-box">
                <img src="create-react-app_.png" class="se-card-img overmind" alt="" />
              </div>
              <h1 class="doc-card-head-text">Create-Apt-Dapp</h1>
              <h1 class="doc-card-sub-text code-card-sub-text">
                Introducing create-apt-dapp: Streamlined dApp development on
                Aptos Network.
              </h1>
              <a href="https://twitter.com/aptoslabs/status/1703853847813501215 ">
                <h1
                  class="doc-card-link"
                  // onclick="openLink('https://overmind.xyz/')"
                >
                  Create-Apt-Dapp
                </h1>
              </a>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Learn;
