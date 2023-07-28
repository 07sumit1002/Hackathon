import Destination from './components/destination.jsx';
import Home from './components/home';
import CultEdu from './components/cultedu';
import Translator from './components/translator';
import Maps from './components/maps'
import About from './components/about.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Rewards from './components/rewards';
import AI from './components/AI';
import Reviews from './components/reviews'
import './App.css';
import React from 'react'

// import Rum from "./components/rum.js"

function App() {
  return (
    <>  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rewards" element={<Rewards />} />    
        <Route path="/Schedule" element={<AI />} />    
        <Route path="/Destination" element={<Destination />} />    
        <Route path="/Translator" element={<Translator />} />    
        <Route path="/Maps" element={<Maps />} />    
        <Route path="/Cultural Education" element={<CultEdu />} />    
        <Route path="/Reviews" element={<Reviews />} />    
        <Route path="/About" element={<About />} />    
      </Routes>
    </Router>
    {/* <Rum /> */}
    </>
  )
}

export default App;
