import React from "react";

import { FaCalendar, FaBriefcase } from "react-icons/fa";

import "./ExperienceCard.css";

export default function ExperienceCard() {
  return (
    <div className="ExperienceCard">
      <h1>
        <FaBriefcase /> Work Experience
      </h1>
      <div>
        <h2>Full-Stack Engineer Intern</h2>
        <h3 className="ExperienceCard-subtitle">
          Superton, Shenzhen, Guangdong, China
        </h3>
        <h3 className="ExperienceCard-subtitle">
          <FaCalendar /> Dec 2021 - July 2022
        </h3>
        <ul className="ExperienceCard-body">
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
