import React from "react";
import ProjectsCard from "../components/ProjectsCard";

import "./Projects.css";
import NavBar from "../components/NavBar";

export default function Projects() {
  const projects = [
    {
      title: "Laser Tag",
      subtitle: "Computer Engineering Capstone Project",
      date: "Jan 2023 - Apr 2023",
      url: "https://github.com/xRossKoh/cg4002-internal-comms",
      desc: "Planned, developed and tested the internal communications between Bluno Beetle boards and a relay laptop using Bluetooth Low Energy (BLE) to transfer sensor data, for a 2-player laser tag system.",
      techstack: ["Python", "C"],
    },
    {
      title: "chargEV",
      date: "Jun 2021 - Jan 2022",
      url: "https://github.com/xRossKoh/chargEV",
      desc: "Full-stack development of an Android mobile application prototype aimed at allowing users to rent out electric vehicle (EV) chargers to other EV owners.",
    },
    {
      title: "CardLI",
      subtitle: "CS2113T Group Project",
      date: "Aug 2021 - Dec 2021",
      url: "https://github.com/AY2122S1-CS2113T-F12-1/tp",
      desc: "Developed and tested a command-line interface (CLI) application, adapted from the AddressBook-Level 2 project created by the SE-EDU initiative.",
    },
    {
      title: "Data Analysis and Machine Learning",
      subtitle: "EE4211 Group Project",
      date: "Aug 2021 - Dec 2021",
      url: "",
      desc: "Programmed a supervised machine learning model, with a model accuracy of 86%, using NumPy and scikit-learn libraries, to predict gas consumption in Austin, Texas based on a given dataset.",
    },
    {
      title: "Remote-Controlled Car",
      subtitle: "CG2271 Group Project",
      date: "Aug 2021 - Dec 2021",
      url: "",
      desc: "Designed, built and programmed a remote-controlled car, controlled via an Android application, to navigate a race course in the shortest time possible, while executing specified light and sound cues simultaneously.",
    },
    {
      title: "plEASE",
      subtitle: "Independent Software Engineering Project (Orbital)",
      date: "May 2021 - Aug 2021",
      url: "https://github.com/xRossKoh/plEASE",
      desc: "Full-stack development of an Android mobile application prototype for students living in university on-campus residences to effectively request for items that they need.",
    },
    {
      title: "Alex",
      subtitle: "CG1112 Group Project",
      date: "Jan 2021 - May 2021",
      url: "",
      desc: "Designed, built and programmed a remote-controlled car, controlled via a command-line application, to perform search-and-rescue operations and environment mapping in a simulated disaster environment using LiDAR.",
    },
    {
      title: "Sight and Sound Entertainment System",
      subtitle: "EE2026 Group Project",
      date: "Jan 2021 - May 2021",
      url: "",
      desc: "Brainstormed and programmed various sight and sound features on an FPGA board, microphone and an OLED RGB display screen.",
    },
    {
      title: "mBot",
      subtitle: "CG1111 Group Project",
      date: "Aug 2020 - Dec 2020",
      url: "",
      desc: "Designed, built and programmed a self-driving car to navigate a maze based on color cues using infrared and ultrasonic sensors.",
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="Projects">
        <div className="Projects__main-body">
          <h1 className="Projects__title">Projects</h1>
          <div className="Projects__container">
            {projects.map((project) => {
              return (
                <ProjectsCard
                  title={project.title}
                  subtitle={project.subtitle}
                  date={project.date}
                  url={project.url}
                  desc={project.desc}
                  techstack={project.techstack}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
