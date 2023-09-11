import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import selfPortrait from "../img/self-portrait.jpg";
import Footer from "../components/Footer";

import "./Home.css";

export default function Home() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Kenneth Koh");
  const [index, setIndex] = useState(0);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const navigate = useNavigate();
  const projects = () => {
    navigate("/projects");
  };

  const resume = () => {
    navigate("/resume");
  };

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 80);
    }
  }, [index]);

  return (
    <div className="Home">
      <header className="Home__header">
        <img
          className="Home__portrait"
          alt="Self-portrait"
          src={selfPortrait}
        ></img>
        <p id="name">{text}</p>
        <button className="Home__button" onClick={resume}>
          Resume
        </button>
        <button className="Home__button" onClick={projects}>
          Projects
        </button>
        <button
          className="Home__button"
          role="link"
          onClick={() =>
            openNewTab(
              "https://www.linkedin.com/in/koh-meng-kiat-kenneth-5422531b3/"
            )
          }
        >
          LinkedIn
        </button>
        <button
          className="Home__button"
          role="link"
          onClick={() => openNewTab("https://github.com/xRossKoh")}
        >
          GitHub
        </button>
      </header>
    </div>
  );
}
