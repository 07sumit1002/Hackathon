import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import SideNavbar from './sidenav'
import Contactimg from './supplie/contact.png'

const contact = () => {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className='Contact'>
      <div className='Contact-Left'>
        <h2 className='Contact-Head'>Contact Us</h2>
        <img className='Contact-img' src={Contactimg} alt='' />
      </div>
      <div className='Contact-right'>
        <h1 className='Contact-h1'>Team JourneyPal</h1>
        <p className='Contact-p'>Mobile: <br /> &nbsp;&nbsp;<span className='Contac-span'>+91-7667064537 </span>, <span className='Contac-span'>+91-7014264024 </span></p>
        <p className='Contact-p'>Email:<br />&nbsp;&nbsp; <span className='Contac-span'>teamjourneypaltrial@gmail.com</span></p>
      </div>
      </div>
      <Footer />

    </>
  )
}

export default contact
