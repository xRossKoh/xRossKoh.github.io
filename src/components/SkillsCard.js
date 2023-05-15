import React from "react";

import { FaTools } from "react-icons/fa";

import "./SkillsCard.css";

export default function SkillsCard() {
  return (
    <div className="SkillsCard">
      <h1>
        <FaTools /> Skills
      </h1>
      <div>
        <h2>Programming Languages</h2>
        <img
          alt="Cpp"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        />
        <img
          alt="Python"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />
        <img
          alt="Javascript"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <img
          alt="C"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        />
        <img
          alt="Java"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        />
        <img
          alt="MySQL"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />
        <img
          alt="HTML5"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />
        <img
          alt="CSS"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
      </div>
      <hr class="solid"></hr>
      <div>
        <h2>Frameworks</h2>
        <img
          alt="ReactJS"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <img
          alt="Flutter"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
        />
        <img
          alt="Vue.js"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
        />
      </div>
      <hr class="solid"></hr>
      <div>
        <h2>Version Control</h2>
        <img
          alt="Git"
          height="80"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />
      </div>
    </div>
  );
}
