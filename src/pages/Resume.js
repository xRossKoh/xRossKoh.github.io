import React from "react";

import SelfIntroCard from "../components/SelfIntroCard";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import SkillsCard from "../components/SkillsCard";
import NavBar from "../components/NavBar";

import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <NavBar />
      <div className="Resume">
        <div id="main-body">
          <h1 id="title">Resume</h1>
          <SelfIntroCard />
          <ExperienceCard />
          <EducationCard />
          <SkillsCard />
        </div>
      </div>
    </div>
  );
}
