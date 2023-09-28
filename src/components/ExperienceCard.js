import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./ExperienceCard.css";
import Tab from "./Tab";

export default function ExperienceCard() {
  const experiences = [
    {
      title: "Teaching Assistant",
      subtitle: ["National University of Singapore (NUS), Singapore"],
      date: "Aug 2023 - Present",
      desc: [
        "Taught tutorial lessons and graded coding assignments for a class of 19 undergraduate students for a course on computer graphics.",
      ],
    },
    {
      title: "Full-Stack Engineer Intern",
      subtitle: [
        "Government of Singapore Investment Corporation (GIC), Singapore",
      ],
      date: "July 2023 - Present",
      desc: [
        "Migrated existing in-house web application's user interface to a standardised design using Next.js and Typescript.",
        "Implemented new front-end features for web application, enhancing functionality and user experience.",
      ],
    },
    {
      title: "Full-Stack Engineer Intern",
      subtitle: ["Superton, Shenzhen, Guangdong, China"],
      date: "Dec 2021 - July 2022",
      desc: [
        "Conducted research on dropshipping processes and implemented the service on the company website, bringing in 2 online stores as customers in 1 month.",
        "Identified and integrated key web elements to improve the Search Engine Optimization (SEO) of the company website, improving the click-through rate on Google by 20% in 3 months.",
        "Enhanced the codebase quality and reduced its size by 10% by incorporating reusable elements.",
      ],
    },
  ];
  return (
    <div className="ExperienceCard">
      <div className="ExperienceCard__title-container">
        <FontAwesomeIcon icon={faBriefcase} size="2x" />
        <h1 className="ExperienceCard__title-container__title">
          Work Experience
        </h1>
      </div>
      {experiences.map((experience) => {
        return (
          <Tab
            title={experience.title}
            subtitle={experience.subtitle}
            date={experience.date}
            desc={experience.desc}
          />
        );
      })}
    </div>
  );
}
