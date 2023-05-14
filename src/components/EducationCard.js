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
        <p>Bachelor of Engineering (Computer Engineering)</p>
        <p>National University of Singapore</p>
        <p>
          <FaCalendar /> Aug 2020 - May 2023
        </p>
        <ul>
          <li>
            Completed as part of the Engineering Scholars Programme offered by
            NUS Engineering.
          </li>
        </ul>
      </div>
      <hr class="solid"></hr>
      <div>
        <p>Master of Science (Management of Technology and Innovation)</p>
        <p>National University of Singapore</p>
        <p>
          <FaCalendar /> Aug 2023 - Dec 2024 (tentative)
        </p>
        <ul>
          <li>
            Specialization in Data Analytics for Innovation Management (DAIM).
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}
