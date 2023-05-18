import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./SelfIntroCard.css";

export default function SelfIntroCard() {
  return (
    <div className="SelfIntroCard">
      <div className="personal-info-section">
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
          I am a curious individual who is always looking into new industries to
          discover unique and novel applications of technologies across
          different fields. I constantly strive to step out of my comfort zone
          to challenge myself and learn more about new technologies. I pride
          myself on my adaptability in new and unfamiliar environments and I
          feel confident in picking up new skills and knowledge quickly and
          effectively.
        </p>
        <p>
          I am currently looking for part-time/full-time internships or
          freelance work involving software engineering in any industry. Please
          contact me with opportunities at kkmk1999@gmail.com.
        </p>
      </div>
    </div>
  );
}
