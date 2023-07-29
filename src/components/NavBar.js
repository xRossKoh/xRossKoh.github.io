import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

  const home = () => {
    navigate("/");
  };

  return (
    <div>
      <nav className="NavBar">
        <h1 className="NavBar__title">Kenneth Koh</h1>
        <FontAwesomeIcon
          className="NavBar__bars_button"
          icon={faBars}
          size="2x"
        />
        <div className="NavBar__buttons__container">
          <button class="NavBar__button" onClick={home}>
            Home
          </button>
          <button class="NavBar__button" onClick={resume}>
            Resume
          </button>
          <button class="NavBar__button" onClick={projects}>
            Projects
          </button>
          <button
            class="NavBar__button"
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
            class="NavBar__button"
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
