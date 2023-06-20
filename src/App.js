import React from "react";
import Main from "./components/Main";
import Card from "./components/Card";
import Section from "./components/Section";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import './App.css';

const App = () => {
  return (
    <div className="bg">
      {/* <div id="drop-down" className="drop-down">
        <a
          // style="text-align: center;"
          href="https://move-developers-dao.gitbook.io/aptos-move-by-example/"
          className="link"
        >
          Events Board
        </a>
        <a href="#" className="link">
          RFP Board
        </a>
      </div> */}
      <Navbar />
      <Main />
      <Card />
      <Section />
      <Community />
      <Footer />

    </div>
  );
};

export default App;
