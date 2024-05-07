import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "./ExperienceCard.css";
import Tab from "./Tab";

export default function ExperienceCard() {
  const experiences = [
    {
      title: "Full-Stack Engineer Intern",
      subtitle: [
        "Government of Singapore Investment Corporation (GIC), Singapore",
      ],
      date: "Jul 2023 - Apr 2024",
      desc: [
        "Performed migration of 2 full-stack features of an internal web application to a standardised user interface design.",
        "Planned for and delivered 5 full-stack features to enhance functionality and user experience.",
        "Collaborated in a team of 6 to diagnose and fix 30+ functionality issues across the front and backend.",
        "Engineered 7 API endpoints for data consumption on the front-end and server-side data processing and computation.",
        "Constructed 20+ queries for data storage and retrieval to integrate and optimize data pipelines.",
        "Suggested 3 improvements to current implementations or API design to increase efficiency and performance.",
      ],
    },
    {
      title: "Teaching Assistant",
      subtitle: ["National University of Singapore (NUS), Singapore"],
      date: "Aug 2023 - Nov 2023",
      desc: [
        "Taught tutorial lessons and graded coding assignments for a class of 18 undergraduate students for a computer graphics course.",
      ],
    },
    {
      title: "Full-Stack Engineer Intern",
      subtitle: ["Superton, Shenzhen, Guangdong, China"],
      date: "Dec 2021 - Jul 2022",
      desc: [
        "Created 10+ reusable front-end components for the company website to improve code quality and enforce best practices.",
        "Assisted the senior developer in designing and implementing 4 full-stack features to expand service offerings.",
        "Crafted 2 front-end elements for Search Engine Optimization (SEO), improving the click-through rate on Google by approximately 20% in 3 months.",
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
