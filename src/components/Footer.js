import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <FontAwesomeIcon icon={faCopyright} />
      <p>Kenneth Koh</p>
    </div>
  );
}
