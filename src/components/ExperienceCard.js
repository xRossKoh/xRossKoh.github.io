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
      date: "July 2023 - Present",
      desc: [
        "Migrated existing in-house web application's user interface to a standardised design",
        "Implemented and maintained front-end features for the web application using Next.js, React Redux, Node.js and TypeScript, enhancing functionality and user experience.",
        "Developed RESTful API endpoints on AWS using API Gateway, Lambda, Node.js and Python, ensuring seamless communication between the web application’s front-end and backend.",
        "Integrated data pipelines on AWS using DynamoDB, S3 and Redshift, optimizing data storage and retrieval.",
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
      date: "Dec 2021 - July 2022",
      desc: [
        "Conducted research on dropshipping processes and implemented the service on the company website using Vue.js and JavaScript, bringing in 2 online stores.",
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
