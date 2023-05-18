import React from "react";
import SelfIntroCard from "../components/SelfIntroCard";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import SkillsCard from "../components/SkillsCard";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <div id="main-body">
        <h1 id="title">Koh Meng Kiat, Kenneth</h1>
        <SelfIntroCard />
        <EducationCard />
        <ExperienceCard />
        <SkillsCard />
      </div>
    </div>
  );
}
