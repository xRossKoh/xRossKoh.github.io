import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

export default function Home() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Koh Meng Kiat, Kenneth");
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
      <header className="Home-header">
        <p id="name">{text}</p>
        <button class="Home-button" onClick={resume}>
          Resume
        </button>
        <button class="Home-button" onClick={projects}>
          Projects
        </button>
        <button
          class="Home-button"
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
          class="Home-button"
          role="link"
          onClick={() => openNewTab("https://github.com/xRossKoh")}
        >
          GitHub
        </button>
      </header>
    </div>
  );
}
