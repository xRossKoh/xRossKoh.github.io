import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import "./EducationCard.css";
import Tab from "./Tab";

export default function EducationCard(props) {
  return (
    <div className="EducationCard">
      <div className="EducationCard--with-icon">
        <FontAwesomeIcon icon={faBookOpen} size="2x" />
        <h1 className="EducationCard__title">Education</h1>
      </div>
      <Tab
        title="Master of Science (Management of Technology and Innovation)"
        subtitle={["National University of Singapore"]}
        date="Aug 2023 - Dec 2024 (tentative)"
        desc={[
          "Specialization in Data Analytics for Innovation Management (DAIM)",
        ]}
      />
      <Tab
        title="Bachelor of Engineering (Computer Engineering)"
        subtitle={["National University of Singapore"]}
        date="Aug 2020 - May 2023"
        desc={[
          "Engineering Scholars Programme offered by the NUS Faculty of Engineering",
        ]}
      />
    </div>
  );
}
