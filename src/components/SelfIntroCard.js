import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faDownload,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./SelfIntroCard.css";
import resume from "../files/Koh_Meng_Kiat_Kenneth_Resume.pdf";

export default function SelfIntroCard() {
  return (
    <div className="SelfIntroCard">
      <div className="SelfIntroCard__personal-info-section">
        <p>
          <FontAwesomeIcon icon={faPhone} /> +65 9171 8462
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> kkmk1999@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faCity} /> Singapore
        </p>
      </div>
      <div>
        <p>
          I am a curious individual who is always looking to discover unique and
          novel technologies and their applications across different fields. At
          the same time, I pride myself on my adaptability in new and unfamiliar
          environments, where I can pick up new skills and knowledge quickly and
          effectively.
        </p>
        <p>
          I am currently looking for full-time job opportunities in any
          industry. I hope to to step out of my comfort zone and aim to do my
          best in whatever I do so as to develop myself professionally.
        </p>
      </div>
      <a href={resume} download="Koh_Meng_Kiat_Kenneth_Resume.pdf">
        <button className="SelfIntroCard__button">
          <FontAwesomeIcon icon={faDownload} /> Download my updated resume
        </button>
      </a>
    </div>
  );
}
