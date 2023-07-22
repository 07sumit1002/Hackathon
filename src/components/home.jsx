
import SideNavbar from "./sidenav";
import Logo from './supplie/Logo final.png'
import Footer from "./footer";
import React from 'react'
import Trail from './supplie/Flight n trail.png'

export default function home() {
  return (
    <>
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
      
      <div className="Home">
        <div className="Home-title">
            <div className="Home-head">YOUR TRAVEL COMPANION
            </div>
            <img className="Home-trail" src={Trail} alt="trail" />   
        </div>
        <div className="Home-converse">A travel AI to make ur journey easier..</div>
      </div>
        <SideNavbar />
      <Footer />
    </>
  )
}
