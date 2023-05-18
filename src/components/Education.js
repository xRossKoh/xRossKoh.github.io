import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./Education.css";

export default function Education(props) {
  return (
    <div className="Education__container">
      <h2 className="Education__title">{props.title}</h2>
      {props.subtitle.map((subtitle) => (
        <h3 className="Education__subtitle">{subtitle}</h3>
      ))}
      <div className="EducationCard--with-icon">
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <h3 className="Education__subtitle Education__date">{props.date}</h3>
      </div>
      <ul className="Education__body">
        {props.desc.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
}
