import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import SideNavbar from './sidenav'
import ServiceImg from './supplie/services.png'

const services = () => {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className='Services'>
        <div className='Services-left'>
            <div className='Services-head'>
                Services
            </div>
            <div className='Services-list'>
                <div className='Services-list-1'>
                    <h2 className='Services-head-h2'>What we offer</h2>
                    <ul className='Services-list-ul'>
                        <li className='Services-list-li'>Ai Iternary</li>
                        <li className='Services-list-li'>Translator</li>
                        <li className='Services-list-li'>Map</li>
                        <li className='Services-list-li'>Emergency Tab</li>
                        <li className='Services-list-li'>Cultural Education</li>
                        <li className='Services-list-li'>Rewarding System</li>
                        <li className='Services-list-li'>Ticket Booking</li>
                    </ul>
                </div>
                <div className='Services-list-2'>
                <h2 className='Services-head-h2'>Department</h2>
                    <ul className='Services-list-ul'>
                        <li className='Services-list-li2'>Travel agency</li>
                        <li className='Services-list-li2'>SoS</li>
                        <li className='Services-list-li2'>Ai</li>
                    </ul>
                </div>
            </div>
        </div>&nbsp;
        <div className='Services-right'>
            <img className='Service-img' src={ServiceImg} alt='' />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default services
