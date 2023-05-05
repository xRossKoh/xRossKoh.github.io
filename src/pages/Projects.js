import React from "react";
import ProjectsCard from "../components/ProjectsCard";

import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <p id="title">Projects</p>
      <div className="Projects-cards">
        <ProjectsCard
          title="2-Player Laser Tag"
          subtitle="Computer Engineering Capstone Project"
          date="Jan 2023 - Apr 2023"
        ></ProjectsCard>
        <ProjectsCard
          title="2-Player Laser Tag"
          subtitle="Computer Engineering Capstone Project"
          date="Jan 2023 - Apr 2023"
        ></ProjectsCard>
        <ProjectsCard
          title="2-Player Laser Tag"
          subtitle="Computer Engineering Capstone Project"
          date="Jan 2023 - Apr 2023"
        ></ProjectsCard>
        <ProjectsCard
          title="2-Player Laser Tag"
          subtitle="Computer Engineering Capstone Project"
          date="Jan 2023 - Apr 2023"
        ></ProjectsCard>
      </div>
    </div>
  );
}
