import React from "react";
import SideNavbar from "./sidenav";
import Navbar from "./navbar";
import Footer from "./footer";
import Destpointer from './supplie/destpointer-removebg-preview.png'
import Left from "./supplie/left-I.png";
import Right from "./supplie/Right-I.png";
export default function home() {
  return (
    <>
      <Navbar />
      <SideNavbar />
      <div className="Destination">
        <div className="Left-portion">
          <div className="Dest-head-top" ><div className="Dest-Head">
            &nbsp;&nbsp;&nbsp;SET YOUR <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;<span className="Dest-span">DESTINATION</span>
          </div>
          <div><img className="Dest-img-head" src={Destpointer} alt="" /></div>
          </div>
          <p className="Dest-Para">
            We aims to simplify the process of choosing a destination,
            provide valuable insights, and assist you in creating a customized
            itinerary that suits your travel preferences. Whether you're a
            seasoned traveler or a novice explorer, We are designed to
            enhance your travel experience and make every journey a memorable
            one.
          </p>
        </div>
        &nbsp;
        <div className="Right-portion">
          <div className="Left-I">
            <img src={Left} alt="left-destination" />
          </div>
          &nbsp;
          <div className="Right-I">
            <img src={Right} alt="Right-destination" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
