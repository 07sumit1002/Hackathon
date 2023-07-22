import SideNavbar from "./sidenav";
import Navbar from './navbar'
import Footer from "./footer";
import Cultimage from './supplie/Culture.png'
import React from 'react'

export default function cultedu() {
  return (
    <div>
    <Navbar />
      <SideNavbar />
      <div className="Cult">
        <div className="Cult-left">
            <img className="Cult-image" src={Cultimage} alt=" " />
        </div>&nbsp;
        <div className="Cult-right">
            <div className="Cult-head">Cultural Education</div>
            <div className="Cult-part">
                <div className="Cult-subtopic">
                    <div className="Cult-info">
                        <p>Tradition <span className="Dest-span">&nbsp;Tradition</span> </p>
                    </div>
                    <div className="Cult-info">
                    <p>Climate <span className="Dest-span">&nbsp;Climate</span> </p>
                    </div>
                </div>
                <hr className="Cult-hr" />
                <div className="Cult-subtopic">
                    <div className="Cult-info">
                        <p>Dance <span className="Dest-span">&nbsp;Dance</span> </p>
                    </div>
                    <div className="Cult-info">
                    <p>Food <span className="Dest-span">&nbsp;Food</span> </p>
                    </div>
                </div>
                <hr className="Cult-hr" />
                <div className="Cult-subtopic">
                    <div className="Cult-info">
                        <p>Language <span className="Dest-span">&nbsp;Language</span> </p>
                    </div>
                    <div className="Cult-info">
                    <p>Tourist-Spot <span className="Dest-span">&nbsp;Tourist-Spot</span> </p>
                    </div>
                </div>
                <hr className="Cult-hr" />
                <div className="Cult-subtopic">
                    <div className="Cult-info">
                        <p>Clothes <span className="Dest-span">&nbsp;Clothes</span> </p>
                    </div>
                    <div className="Cult-info">
                    <p>Night Life <span className="Dest-span">&nbsp;Night Life</span> </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
