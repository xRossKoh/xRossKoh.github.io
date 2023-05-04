import React, { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Koh Meng Kiat, Kenneth");
  const [index, setIndex] = useState(0);

  const openNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const navigate = useNavigate();
  const experience = () => {
    navigate("/experience");
  };

  const projects = () => {
    navigate("/projects");
  };

  const resume = () => {
    navigate("resume");
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
        <p>{text}</p>
        <button onClick={resume}>Resume</button>
        <button onClick={experience}>Work Experiences</button>
        <button onClick={projects}>Projects</button>
        <button
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
          role="link"
          onClick={() => openNewTab("https://github.com/xRossKoh")}
        >
          GitHub
        </button>
      </header>
    </div>
  );
}

export default Home;
