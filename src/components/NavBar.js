import React from "react";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
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

  return (
    <div>
      <nav className="NavBar">
        <h1>Resume</h1>
        <div className="NavBar__buttons__container">
          <button onClick={resume}>Resume</button>
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
        </div>
      </nav>
    </div>
  );
}
