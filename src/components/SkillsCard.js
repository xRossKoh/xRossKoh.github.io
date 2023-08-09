import React from "react";
import SkillsProgressBar from "./SkillsProgressBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

import "./SkillsCard.css";

export default function SkillsCard() {
  const skills = [
    {
      alt: "Cpp",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      level: "three",
    },
    {
      alt: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      level: "three",
    },
    {
      alt: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: "three",
    },
    {
      alt: "ReactJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: "three",
    },
    {
      alt: "Javascript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: "two",
    },
    {
      alt: "Typescript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: "two",
    },
    {
      alt: "HTML5",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: "two",
    },
    {
      alt: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: "two",
    },
    {
      alt: "C",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      level: "two",
    },
    {
      alt: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      level: "two",
    },
    {
      alt: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      level: "one",
    },
    {
      alt: "Flutter",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      level: "one",
    },
    {
      alt: "Vue.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      level: "one",
    },
  ];

  return (
    <div className="SkillsCard">
      <div className="SkillsCard__title-container">
        <FontAwesomeIcon icon={faTools} size="2x" />
        <h1 className="SkillsCard__title-container__title">Skills</h1>
      </div>
      <div className="SkillsCard__grid-container">
        {skills.map((skill) => {
          return (
            <SkillsProgressBar
              alt={skill.alt}
              src={skill.src}
              level={skill.level}
            />
          );
        })}
      </div>
    </div>
  );
}
