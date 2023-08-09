import React from "react";

import "./SkillsProgressBar.css";

export default function SkillsProgressBar(props) {
  return (
    <div className="SkillsProgressBar">
      <img
        className="SkillsProgressBar__skills-image"
        alt={props.alt}
        height="100"
        src={props.src}
      />
      <div className="SkillsProgressBar__progress-bar">
        <p className="SkillsProgressBar__progress-bar__text">
          {props.level === "one"
            ? "Beginner"
            : props.level === "two"
            ? "Novice"
            : "Proficient"}
        </p>
        <div className="SkillsProgressBar__progress-bar__container">
          <div
            className={`SkillsProgressBar__progress-bar__filler--${props.level}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
