import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faEnvelope,
  faFile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./SelfIntroCard.css";
import resume from "../files/Koh_Meng_Kiat_Kenneth_new.pdf";

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
          effectively. As such, I am open to working in different industries and
          with different technologies in order to broaden my experiences and
          develop my skillsets.
        </p>
        <p>
          I am a good team player, being an effective communicator while also
          taking responsibility and pride in the work that I put out. I also
          enjoy working with people of different cultures and backgrounds as
          they can provide me with fresh perspectives and new ideas.
        </p>
        <p>
          I am currently looking for part-time/full-time internships or
          positions involving software engineering in any industry. Please
          download a copy of my resume{" "}
          <a href={resume} download="Koh_Meng_Kiat_Kenneth_Resume.pdf">
            here
          </a>{" "}
          and contact me with related opportunities.
        </p>
      </div>
    </div>
  );
}
