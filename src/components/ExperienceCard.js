import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./ExperienceCard.css";

export default function ExperienceCard() {
  return (
    <div className="ExperienceCard">
      <div className="ExperienceCard--with-icon">
        <FontAwesomeIcon icon={faBriefcase} size="2x" />
        <h1 className="ExperienceCard__title">Work Experience</h1>
      </div>
      <div className="experience__container">
        <h2 className="experience__title">Full-Stack Engineer Intern</h2>
        <h3 className="experience__subtitle">
          Superton, Shenzhen, Guangdong, China
        </h3>
        <div className="ExperienceCard--with-icon">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <h3 className="experience__subtitle experience__date">
            Dec 2021 - July 2022
          </h3>
        </div>
        <ul className="experience__body">
          <li>
            Conducted research on dropshipping processes and implemented the
            service on the company website, bringing in 2 online stores as
            customers in 1 month.
          </li>
          <li>
            Identified and integrated key web elements to improve the Search
            Engine Optimization (SEO) of the company website, improving the
            click-through rate on Google by 20% in 3 months.
          </li>
          <li>
            Enhanced the codebase quality and reduced its size by 10% by
            incorporating reusable elements.
          </li>
        </ul>
      </div>
    </div>
  );
}
