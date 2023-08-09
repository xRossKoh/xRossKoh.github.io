import React from "react";

import "./ProjectsCard.css";
import { useNavigate } from "react-router-dom";

export default function ProjectsCard(props) {
  const navigate = useNavigate();
  const openNewTab = () => {
    if (props.url === "") {
      navigate("/no-github");
    } else {
      window.open(props.url, "_blank", "noreferrer");
    }
  };

  return (
    <div>
      <button className="ProjectsCard__button" onClick={() => openNewTab()}>
        <div className="ProjectsCard__header">
          <div className="ProjectsCard__header__desc">
            <p className="ProjectsCard__title">{props.title}</p>
            <p className="ProjectsCard__subtitle">{props.subtitle}</p>
          </div>
          <div className="ProjectsCard__header__date">
            <p className="ProjectsCard__date">{props.date}</p>
          </div>
        </div>
        <div className="ProjectsCard__desc">{props.desc}</div>
      </button>
    </div>
  );
}
