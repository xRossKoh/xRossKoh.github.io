import React from "react";
import SkillsProgressBar from "./SkillsProgressBar";

import { FaTools } from "react-icons/fa";

import "./SkillsCard.css";

export default function SkillsCard() {
  return (
    <div className="SkillsCard">
      <h1>
        <FaTools /> Skills
      </h1>
      <div className="grid-container">
        <SkillsProgressBar
          alt="Cpp"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          level="three"
        />
        <SkillsProgressBar
          alt="Python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          level="three"
        />
        <SkillsProgressBar
          alt="Git"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          level="three"
        />
        <SkillsProgressBar
          alt="Javascript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          level="two"
        />
        <SkillsProgressBar
          alt="C"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
          level="two"
        />
        <SkillsProgressBar
          alt="MySQL"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          level="two"
        />
        <SkillsProgressBar
          alt="HTML5"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          level="two"
        />
        <SkillsProgressBar
          alt="CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          level="two"
        />
        <SkillsProgressBar
          alt="ReactJS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          level="two"
        />
        <SkillsProgressBar
          alt="Java"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          level="one"
        />
        <SkillsProgressBar
          alt="Typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          level="one"
        />
        <SkillsProgressBar
          alt="Flutter"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          level="one"
        />
        <SkillsProgressBar
          alt="Vue.js"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          level="one"
        />
      </div>
    </div>
  );
}
