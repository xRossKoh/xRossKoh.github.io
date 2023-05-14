import React from "react";
import SelfIntroCard from "../components/SelfIntroCard";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";

import { FaPhone, FaEnvelope, FaCity } from "react-icons/fa";

import "./Resume.css";

export default function Resume() {
  return (
    <div className="Resume">
      <div id="main-body">
        <h1 id="title">Koh Meng Kiat, Kenneth</h1>
        <div id="personal-info-section">
          <p className="personal-info">
            <FaPhone /> +65 9171 8462
          </p>
          <p className="personal-info">
            <FaEnvelope /> kkmk1999@gmail.com
          </p>
          <p className="personal-info">
            <FaCity /> Singapore
          </p>
        </div>
        <SelfIntroCard />
        <EducationCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
