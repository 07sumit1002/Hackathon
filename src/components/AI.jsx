import React, { useState } from "react";
import Navbar from "./navbar";
import SideNavbar from "./sidenav";
import Footer from "./footer";
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
            <label htmlFor="">Journey-Bot</label><br />
            <input
              className="Ai-input"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              className="Ai-input"
              type="text"
              placeholder="Number of days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <input
              className="Ai-input"
              type="text"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            </div>{" "}
            <button className="btn btn-accept w-100" type="submit">
            Go
            </button>
        </form>
        <div className="Ai-response">
            <p className="Ai-response-output">
            {response ? response : "Ask me anything..."}
            </p>
        </div>
        </div>
    <Footer />
    </>
  );
}