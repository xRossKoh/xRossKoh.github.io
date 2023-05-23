import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import selfPortrait from "../img/self-portrait.jpg";

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
          class="Home__portrait"
          alt="Self-portrait"
          src={selfPortrait}
        ></img>
        <p id="name">{text}</p>
        <button class="Home__button" onClick={resume}>
          Resume
        </button>
        <button class="Home__button" onClick={projects}>
          Projects
        </button>
        <button
          class="Home__button"
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
          class="Home__button"
          role="link"
          onClick={() => openNewTab("https://github.com/xRossKoh")}
        >
          GitHub
        </button>
      </header>
    </div>
  );
}
