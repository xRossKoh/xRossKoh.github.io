import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";
import { Drawer } from "@mui/material";

export default function NavBar(props) {
  const { page } = props;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <h1 className="NavBar__title" onClick={home}>
          Kenneth Koh
        </h1>
        <FontAwesomeIcon
          className="NavBar__button NavBar__bars_button"
          icon={faBars}
          size="2x"
          onClick={() => {
            setIsDrawerOpen((prevState) => !prevState);
          }}
        />
        <div className="NavBar__buttons__container">
          <button
            className={
              page === "Resume" ? "NavBar__disabled-button" : "NavBar__button"
            }
            onClick={resume}
            disabled={page === "Resume"}
          >
            Resume
          </button>
          <button
            className={
              page === "Projects" ? "NavBar__disabled-button" : "NavBar__button"
            }
            onClick={projects}
            disabled={page === "Projects"}
          >
            Projects
          </button>
          <button
            className="NavBar__button"
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
            className="NavBar__button"
            role="link"
            onClick={() => openNewTab("https://github.com/xRossKoh")}
          >
            GitHub
          </button>
        </div>
      </nav>
      <Drawer
        open={isDrawerOpen}
        anchor="right"
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <div className="NavBar__drawer__button-container">
          <FontAwesomeIcon
            className="NavBar__button NavBar__xmark_button"
            icon={faXmark}
            size="2x"
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          />
          <button
            className={
              page === "Resume" ? "NavBar__disabled-button" : "NavBar__button"
            }
            onClick={resume}
            disabled={page === "Resume"}
          >
            Resume
          </button>
          <button
            className={
              page === "Projects" ? "NavBar__disabled-button" : "NavBar__button"
            }
            onClick={projects}
            disabled={page === "Projects"}
          >
            Projects
          </button>
          <button
            className="NavBar__button"
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
            className="NavBar__button"
            role="link"
            onClick={() => openNewTab("https://github.com/xRossKoh")}
          >
            GitHub
          </button>
        </div>
      </Drawer>
    </div>
  );
}
