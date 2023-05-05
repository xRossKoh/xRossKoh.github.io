import React from "react";

import "./ProjectsCard.css";

export default function ProjectsCard(props) {
  return (
    <div className="ProjectsCard">
      <div className="ProjectsCard-header">
        <div style={{ float: "left", width: "60%" }}>
          <p id="project-title">{props.title}</p>
          <p id="project-subtitle">{props.subtitle}</p>
        </div>
        <div style={{ float: "right", width: "40%" }}>
          <p id="project-date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
