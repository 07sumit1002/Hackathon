import Navbar from "./navbar";
import Sidenavbar from "./sidenav";
import Footer from "./footer";
import Rewardwalk from "./supplie/rewardwalk.png";
import Steps from "./supplie/steps.png";

import { useState } from "react";

const Rewards = () => {
  const [showPoints, setShowPoints] = useState(false);

  const handleClick = () => {
    setShowPoints(!showPoints);
  };
  return (
    <>
      <Navbar />
      <Sidenavbar />
      <div className="Rewards">
        <div className="Rewards-top">
          <img
            className="Rewards-img"
            src={Rewardwalk}
            alt="walk in the forest"
          />
        </div>
        &nbsp;
        <div className="Rewards-bottom">
          <div className="Rewards-bottom-top">
            <div className="Rewards-bottom-top-left">
              <h1 className="Rewards-head">REWARDS SYSTEM</h1>
            </div>
            <div className="Rewards-bottom-top-right">
              <div className="Rewards-points" onClick={handleClick}>
                Know your Points
              </div>
            </div>
          </div>
          <div className="Rewards-bottom-bottom">
            <div className="Rewards-bottom-bottom-I">
              <h4 className="Rewards-h2">Description</h4>
              <p className="Rewards-p">
                Our travel app's rewarding system incentivizes user engagement
                through points earned from actions like itinerary creation,
                translations, reviews, and cultural education. Levels, badges,
                discounts, social connections, and referrals enhance the overall
                experience.
              </p>
            </div>
            &nbsp;
            <div className="Rewards-bottom-bottom-I">
              <img src={Steps} alt="steps" className="Rewards-step" />
            </div>
            &nbsp;
            {showPoints && (
              <div className="Rewards-bottom-bottom-I">
                <div className="Rewards-points-onclick">
                  As a first-time user of this app, you are entitled
                  to an exclusive welcome bonus of 15 points. Start your journey
                  with a boost and enjoy the perks that await you!
                </div>
                <div className="Rewards-points-onclick-conversion-rate">
                  Don't miss out on this incredible opportunity to make the most
                  of your loyalty! Rs. 100 requires 10 points
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rewards;
