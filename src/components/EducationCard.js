import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import "./EducationCard.css";
import Tab from "./Tab";

export default function EducationCard(props) {
  const educations = [
    {
      title: "Master of Science (Management of Technology and Innovation)",
      subtitle: ["National University of Singapore"],
      date: "Aug 2023 - Dec 2024 (tentative)",
      desc: [
        "Specialization in Data Analytics for Innovation Management (DAIM)",
      ],
    },
    {
      title: "Bachelor of Engineering (Computer Engineering)",
      subtitle: ["National University of Singapore"],
      date: "Aug 2020 - May 2023",
      desc: [
        "Graduated with Honours (Highest Distinction)",
        "Completed under the Engineering Scholars Programme offered by the NUS Faculty of Engineering",
      ],
    },
  ];
  return (
    <div className="EducationCard">
      <div className="EducationCard__title-container">
        <FontAwesomeIcon icon={faBookOpen} size="2x" />
        <h1 className="EducationCard__title-container__title">Education</h1>
      </div>
      {educations.map((education) => {
        return (
          <Tab
            title={education.title}
            subtitle={education.subtitle}
            date={education.date}
            desc={education.desc}
          />
        );
      })}
    </div>
  );
}
