import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./EducationCard.css";

export default function EducationCard(props) {
  return (
    <div className="EducationCard">
      <div className="EducationCard--with-icon">
        <FontAwesomeIcon icon={faBookOpen} size="2x" />
        <h1 className="EducationCard__title">Education</h1>
      </div>
      <div className="education__container">
        <h2 className="education__title">
          Master of Science (Management of Technology and Innovation)
        </h2>
        <h3 className="education__subtitle">
          National University of Singapore
        </h3>
        <div className="EducationCard--with-icon">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <h3 className="education__subtitle education__date">
            Aug 2023 - Dec 2024
          </h3>
        </div>
        <ul className="education__body">
          <li>
            Specialization in Data Analytics for Innovation Management (DAIM).
          </li>
        </ul>
      </div>
      <div className="education__container">
        <h2 className="education__title">
          Bachelor of Engineering (Computer Engineering)
        </h2>
        <h3 className="education__subtitle">
          National University of Singapore
        </h3>
        <div className="EducationCard--with-icon">
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <h3 className="education__subtitle education__date">
            Aug 2020 - May 2023
          </h3>
        </div>
        <ul className="education__body">
          <li>
            Completed as part of the Engineering Scholars Programme offered by
            NUS Engineering.
          </li>
        </ul>
      </div>
    </div>
  );
}
