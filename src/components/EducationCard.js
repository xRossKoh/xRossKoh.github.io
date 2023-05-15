import React from "react";
import { FaCalendar, FaBookOpen } from "react-icons/fa";

import "./EducationCard.css";

export default function EducationCard(props) {
  return (
    <div className="EducationCard">
      <h1>
        <FaBookOpen /> Education
      </h1>
      <div>
        <h2>Bachelor of Engineering (Computer Engineering)</h2>
        <h3 className="EducationCard-subtitle">
          National University of Singapore
        </h3>
        <h3 className="EducationCard-subtitle">
          <FaCalendar /> Aug 2020 - May 2023
        </h3>
        <ul className="EducationCard-body">
          <li>
            Completed as part of the Engineering Scholars Programme offered by
            NUS Engineering.
          </li>
        </ul>
      </div>
      <hr class="solid"></hr>
      <div>
        <h2>Master of Science (Management of Technology and Innovation)</h2>
        <h3 className="EducationCard-subtitle">
          National University of Singapore
        </h3>
        <h3 className="EducationCard-subtitle">
          <FaCalendar /> Aug 2023 - Dec 2024 (tentative)
        </h3>
        <ul className="EducationCard-body">
          <li>
            Specialization in Data Analytics for Innovation Management (DAIM).
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}
