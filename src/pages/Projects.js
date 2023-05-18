import React from "react";
import ProjectsCard from "../components/ProjectsCard";

import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <div id="main-body">
        <h1 id="title">Projects</h1>
        <div className="Projects__container">
          <ProjectsCard
            title="2-Player Laser Tag"
            subtitle="Computer Engineering Capstone Project"
            date="Jan 2023 - Apr 2023"
            url="https://github.com/xRossKoh/cg4002-internal-comms"
            desc="Planned, developed and tested the internal communications between Bluno Beetle boards and a relay laptop using Bluetooth Low Energy (BLE) to transfer sensor data."
            techstack={["Python", "C"]}
          />
          <ProjectsCard
            title="chargEV"
            date="Jun 2021 - Jan 2022"
            url="https://github.com/xRossKoh/cg4002-internal-comms"
            desc="Full-stack development of an Android mobile application prototype aimed at allowing users to rent out electric vehicle (EV) chargers to other EV owners."
          />
          <ProjectsCard
            title="CardLI"
            subtitle="CS2113T Group Project"
            date="Aug 2021 - Dec 2021"
            url="https://github.com/xRossKoh/cg4002-internal-comms"
            desc="Developed and tested a command-line interface (CLI) application, adapted from the AddressBook-Level 2 project created by the SE-EDU initiative."
          />
          <ProjectsCard
            title="Data Analysis and Machine Learning"
            subtitle="EE4211 Group Project"
            date="Aug 2021 - Dec 2021"
            url="https://github.com/xRossKoh/cg4002-internal-comms"
            desc="Programmed a supervised machine learning model, with a model accuracy of 86%, using NumPy and scikit-learn libraries, to predict gas consumption in Austin, Texas based on a given dataset."
          />
          <ProjectsCard
            title="plEASE"
            subtitle="Independent Software Engineering Project (Orbital)"
            date="May 2021 - Aug 2021"
            url="https://github.com/xRossKoh/cg4002-internal-comms"
            desc="Full-stack development of an Android mobile application prototype for students living in university on-campus residences to effectively request for items that they need."
          />
        </div>
      </div>
    </div>
  );
}
