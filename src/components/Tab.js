import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./Tab.css";

export default function Tab(props) {
  return (
    <div className="Tab__container">
      <h2 className="Tab__title">{props.title}</h2>
      {props.subtitle.map((subtitle) => (
        <h3 className="Tab__subtitle">{subtitle}</h3>
      ))}
      <div className="Tab--with-icon">
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <h3 className="Tab__subtitle Tab__date">{props.date}</h3>
      </div>
      {props.desc && (
        <ul className="Tab__body">
          {props.desc.map((desc) => (
            <li>{desc}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
