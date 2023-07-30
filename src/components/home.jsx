
import SideNavbar from "./sidenav";
import Logo from './supplie/Logo final.png';
import Footer from "./footer";
import React from 'react';
import Img1 from './supplie/home img1.png';
import Img2 from './supplie/home img2.png';
import Img3 from './supplie/home img3.png';
import Trail from './supplie/Flight n trail.png';
import Img5 from './supplie/Compass.png';
import Img4 from './supplie/homeimglogo.png'
import  { useState } from 'react';
import CustomAlert from './customalert'; // Replace 'CustomAlert' with the correct path to your custom alert component
import { Link } from "react-router-dom";

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = (selectedOption) => {
    // Do something with the selected option
    console.log(`Selected option: ${selectedOption}`);
    setShowAlert(false);
  };

  return (
    <>
    {showAlert && (
        <CustomAlert
          options={['Railways', 'Airways']}
          onClose={handleAlertClose}
        />
      )}
      <div className="Home">
        <div className="Home-top">
          <div className="Home-Navbar">
              <div className="logo">
                  <img className='Home-logoimg' src={Logo} alt='' />
              </div>
              <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              </ul>
          </div>
          <div className="Home-tt">
            <div className="Home-title">
                <div className="Home-head">YOUR TRAVEL COMPANION
                </div>
                <img className="Home-trail" src={Trail} alt="trail" />   
            </div>
            <div className="Home-converse">A travel AI to make ur journey easier..</div>
          </div>
        </div>
        <div className="Home-mid">
          <div className="Home-mid-1">
            
          </div>
          <div className="Home-mid-1">
            <img src={Img1} alt="" className="Home-mid-1-img" />
          </div>
          <div className="Home-mid-1">
            <img src={Img2} alt="" className="Home-mid-1-img" />
          </div>
          <div className="Home-mid-3">
            <img src={Img3} alt="" className="Home-mid-1-img" />
          </div>
          <div className="Home-mid-2">
            <img src={Img4} alt="" className="Home-mid-1-logo" />
            <img src={Img1} alt="" className="Home-mid-1-img1" />
            <img src={Img5} alt="" className="Home-mid-1-compass" />
          </div>
        </div>
        <div className="Home-button">
           <Link className="Home-button1" to='/Schedule'> Plan a Journey</Link>
        </div>
      </div>    
      <SideNavbar />
      <Footer />
      
    </>
  )
}
