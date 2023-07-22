import React from "react";
import Navbar from "./navbar";
import SideNavbar from "./sidenav";
import Footer from "./footer";
import Mapimg from "./supplie/Maps.png";
import Mappntr from "./supplie/Mappointer.png";

const maps = () => {
  return (
    <div>
      <Navbar />
      <SideNavbar />
      <div className="Maps">
        <div className="Maps-left">
          <h1 className="Maps-head">Maps and Services</h1>
          <div className="Maps-left-I">
            <img src={Mappntr} alt="Map pointer" className="Maps-left-img" />
            <div className="Maps-left-I-text">
              We provides a wide range of services, including travel
              recommendations, accommodation booking, budget planning, and
              personalized itineraries, ensuring a seamless and memorable travel
              experience for users. We offers interactive maps with real-time
              navigation, making it easy to explore new destinations and plan
              routes efficiently.
            </div>
          </div>
          <div className="Maps-left-II">
            Locations and Review
          </div>
        </div>
        &nbsp;
        <div className="Maps-right">
          <img src={Mapimg} alt="Maps" className="Maps-right-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default maps;
