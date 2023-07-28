/* eslint-disable no-unused-vars */
import Earth from './supplie/earth.png';
import Time from './supplie/time.png'; 
import Budget from './supplie/Budget.png';
import React, { useState } from "react";
import Navbar from "./navbar";
import SideNavbar from "./sidenav";
// import Footer from "./footer";
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const HTTP = "http://localhost:8080/chat";
  const handleSubmit = (e) => {
    e.preventDefault();

    const prompt = `Make a tour plan to '${location}' for '${days}' days with 'Rs ${budget}' as budget...`;
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

      setLocation("");
      setDays("");
      setBudget("");
     };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <>
    <Navbar />
    <SideNavbar />
        <div className="Ai">
        <form className="Ai-form" onSubmit={handleSubmit}>
          <div className="Ai-form-group">
            <div className="Ai-input-Loc"> 
              <label className="Ai-label" htmlFor="">AI <br />ITERNARY</label><br />
              <img className='Ai-input-img' src={Earth} alt="" />
              <h1>01 Destination</h1>
              <input
                className="Ai-input"
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="Ai-input-days">
              <img className='Ai-input-img' src={Time} alt="" />
              <h1>02 Time Scheduling</h1>
              <input
                className="Ai-input"
                type="text"
                placeholder="Number of days < 15"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
            <div className="Ai-input-rs"> 
            <br /><br />
              <img className='Ai-input-img' src={Budget} alt="" /> 
              <h1>03 Money management</h1>
              <input
                className="Ai-input"
                type="text"
                placeholder="Budget in Rs"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>  
          </div>{" "}
          <button className="Ai-btn" type="submit">
            Generate Iternary
          </button>
        </form>
        <div className="Ai-response">
            <p className="Ai-response-output">
            {response ? response : "Your Schedule ..."}
            </p>
        </div>
        </div><br />
    {/* <Footer /> */}
    </>
  );
}