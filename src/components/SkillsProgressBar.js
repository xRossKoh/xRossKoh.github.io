import React from "react";

import "./SkillsProgressBar.css";

export default function SkillsProgressBar(props) {
  return (
    <div className="SkillsProgressBar">
      <div className="SkillsProgressBar-container">
        <img id="skills-image" alt={props.alt} height="100" src={props.src} />
        <div className="progress-bar">
          <p className="progress-bar__text">
            {props.level === "one"
              ? "Novice"
              : props.level === "two"
              ? "Proficient"
              : "Expert"}
          </p>
          <div className="progress-bar__container">
            <div className={`progress-bar__filler--${props.level}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
