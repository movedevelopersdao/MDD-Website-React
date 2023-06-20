import React from "react";
import Nav from "./Nav";
import Footer from "../components/Footer";
import {Link } from "react-router-dom";
import '../Home.css';

const Tutorials = () => {
  return (
    <div>
      <Nav />
      <div>
        <section>
          <div className="section-description">
            <h1 className="sec-desc-head-text">APTOS DEVELOPMENT TUTORIALS</h1>
            <h1 className="sec-desc-sub-text">
              Welcome to our curated list of community tutorials.
            </h1>
            <div className="link-box">
                <a href="https://discord.com/invite/AVr5u59tXs">
              <h1
                className="sec-desc-link-text"
              >
                Submit a tutorial
              </h1></a>
            </div>
          </div>

          <div className="tuts-display">
            <a href="https://medium.com/mokshyaprotocol/write-your-first-smart-contract-on-aptos-a-step-by-step-guide-e16a6f5c2be6">
            <div
              className="tut-display-card first-tut-card"
            >
              <h1 className="tut-card-head-text">
                Mokshya Protocol Beginner Guide
              </h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Samundra Karki</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Feb 27</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">8 Min</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                A step by step guide to write your first smart contract in Move
              </h1>
            </div></a><a href="https://medium.com/code-community-command">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Wayne Culbreth Aptos Tutorial </h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Wayne Culbreth</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">May 31</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">11 Min</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Aptos tutorials in a concise article
              </h1>
            </div></a><a href="https://github.com/zellic/move-prover-examples">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Zellic Move Prover Tutorial</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                A step by step Move Prover guide from installation to examples
              </h1>
            </div></a><a href="https://medium.com/aptoslabs/block-stm-how-we-execute-over-160k-transactions-per-second-on-the-aptos-blockchain-3b003657e4bas">
            <div
              onclick="openLink('https://medium.com/aptoslabs/block-stm-how-we-execute-over-160k-transactions-per-second-on-the-aptos-blockchain-3b003657e4bas')"
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Aptos Labs’ Block-STM Article</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Aptos</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">April 13</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">9 Min</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Learn more about BlockSTM and parallel processing from Aptos
              </h1>
            </div></a><a href="https://jacobadevore.medium.com/revolutionize-your-aptos-smart-contract-1a855c5cae7a">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">
                Smart contract tutorial by Jacob Devore{" "}
              </h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Jacob Devore</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">April 21</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">4 Min</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Revolutionize smart contract using view functions.
              </h1>
            </div></a><a href="https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Aptos Examples</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">Aptos Examples</h1>
            </div></a><a href="https://aptos.dev/tutorials/">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Onboarding Examples</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Onboarding Aptos and Move Language tutorials for newbies
              </h1>
            </div></a><a href="https://github.com/MystenLabs/awesome-move">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Awesome Moves</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                An all in one guide to all Move Language resources, information,
                communities, podcasts, tools and more.
              </h1>
            </div></a><a href="https://github.com/econia-labs/teach-yourself-move">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Teach Yourself Move</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                    /
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Move Language resources and roadmap maintained by Econia Labs
                team.
              </h1>
            </div></a><a href="https://www.pentagon.xyz/">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Pentagon</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Open sources examples and libraries maintained by Pentagon team
              </h1>
            </div></a><a href="https://aptos.dev/reference/glossary">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Aptos Glossary</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Glossary of all keywords in Aptos.
              </h1>
            </div></a><a href="http://www.aptoseden.com/">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Video Tutorials By Aptos Eden</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Move language video tutorials in chinese.
              </h1>
            </div></a><a href="https://osec.io/blog/2022-09-06-move-introduction/">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">Move Introduction By Otter Sec</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Robert Chen</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Sep 6</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Brief introduction to Move language by OtterSec
              </h1>
            </div></a><a href="https://www.movebit.xyz/blog/post/move-prover-tutorial-part-1.html">
            <div
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">MoveBit Move Prover Tutorial</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Xudong Wang & 0xyi</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">Sep 27</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">Move Prover tutorial by MoveBit</h1>
            </div></a>
            <a href="https://www.zellic.io/blog/move-fast-and-break-things-pt-1">
            <div
              onclick="openLink('https://www.zellic.io/blog/move-fast-and-break-things-pt-1')"
              className="tut-display-card"
            >
              <h1 className="tut-card-head-text">
                Move Fast and Break Things by Zellic
              </h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Blog on Aptos security and possible hacks
              </h1>
            </div></a><a href="https://www.zellic.io/blog/top-10-aptos-move-bugs">
            <div
              className="tut-display-card last-tut-card"
            >
              <h1 className="tut-card-head-text">Aptos Move Language hacks</h1>
              <div className="tut-card-details">
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Writing Hand Light Skin Tone.png"
                      className="tut-card-detail-img hand-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Calendar.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
                <div className="tut-card-detail">
                  <div className="tut-card-detail-img-box">
                    <img
                      src="Alarm Clock.png"
                      className="tut-card-detail-img"
                      alt="hand"
                    />
                  </div>
                  <h1 className="tut-card-detail-text">-</h1>
                </div>
              </div>
              <h1 className="tut-card-sub-text">
                Top 10 Move language possible bugs on Aptos.
              </h1>
            </div></a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Tutorials;
