import React, { useState } from "react";
import Navbar from "./navbar";
import SideNavbar from "./sidenav";
import Footer from "./footer";
import axios from "axios";
export default function ChatGPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
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
                className="Ai-textarea"
                type="text"
                placeholder="Make a tour plan to 'Location' for 'x days' with 'Rs xxxx' as budget..."
                value={prompt}
                onChange={handlePrompt}
            />
            </div>{" "}
            {/* <button className="btn btn-accept w-100" type="submit">
            Go
            </button> */}
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