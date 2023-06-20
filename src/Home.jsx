import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from './App';
import Developer_hub from './pages/Developer_hub';
import Docs from './pages/Docs';
import Learn from './pages/Learn';
import Set_up from './pages/Set_up';
import Tools from './pages/Tools';
import Tutorials from './pages/Tutorials';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MOVE DEVELOPERS DAO</title>
                {/* <link rel="canonical" href="../public/logo-min 3.png" src="logo-min 3.png" /> */}
            </Helmet>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Developer_hub/>}/>
            <Route path="/docs" element={<Docs/>}/>
            <Route path="/learn" element={<Learn/>}/>
            <Route path="/tutorials" element={<Tutorials/>}/>
            <Route path="/set_up" element={<Set_up/>}/>
            <Route path="/tools" element={<Tools/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Home
