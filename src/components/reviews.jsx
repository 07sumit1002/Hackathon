/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "./navbar";
import SideNavbar from "./sidenav";
import Footer from "./footer";
import React from "react";
import Rum from "./rum";
import Review from './supplie/Review.jpeg';

const reviews = () => {
  return (
    <div>
      <Navbar />
      <SideNavbar />
      <div className="Review">
        <div className="Review-review">
          <h1 className="Review-review-h1">Reviews</h1>
          <p className="Review-review-para">
            Our users love Journeypal! They have shared their incredible
            experiences and positive feedback, praising its user-friendly
            interface, extensive travel options, and helpful trip planning
            features.
          </p>
          <img src={Review} className="Review-img" alt="" />
        </div>
        <div className="Review-map">
          <Rum />
          <h1 className="Review-map-h1">Map</h1>
          <p className="Review-map-para">
            It provides an interactive and visual representation of travel
            destinations, allowing users to explore and plan their trips with
            ease.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default reviews;
