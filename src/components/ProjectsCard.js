import React from "react";

import "./ProjectsCard.css";

export default function ProjectsCard(props) {
  return (
    <div className="ProjectsCard">
      <div className="ProjectsCard-header">
        <div className="ProjectsCard-header-desc">
          <p id="project-title">{props.title}</p>
          <p id="project-subtitle">{props.subtitle}</p>
        </div>
        <div className="ProjectsCard-header-desc">
          <p id="project-date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
