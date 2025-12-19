"use client";
import "../styles/projects.css";
import "../app/globals.css";
import Header from "../components/header";
import React from "react";

// const expandImage = () => {
//   let img = document.getElementById(id);
//   img.style.transform = "scale(1.5)";
//   img.style.transition = "transform 0.25s ease";
// };

export default function Projects() {
  return (
    <div>
      <Header activeLink="projects" />
      <div className="appears">
        <div className="project-container">
          <div className="images-container">
            <iframe
              src="https://drive.google.com/file/d/1CDa8MJsXw2Z2-CWd-Ap1xEARrrFis3MP/preview"
              className="course-advisor-demo"
              allow="fullscreen"
              id="video"
            ></iframe>
            <img src="/img/poster.png" className="course-advisor-demo" />
            <img src="/img/onepager.png" className="course-advisor-demo" />
          </div>
          <div className="projects-text-container">
            <h3 className="project-title">AI Course Advisor</h3>
            <p className="tools-used">
              Tools Used: React/TypeScript, OpenAI API, Python/Flask, MongoDB,
              Redis, Docker, Figma, Git, Duke OKD
            </p>
            <p className="project-blurb">
              Our project integrated Duke's course catalog with a fine-tuned
              version of OpenAI's gpt-3.5-turbo model. We semantically searched
              our database for vector representations closest to the user's
              query (RAG) to generate relevant courses. Throughout the summer,
              we worked closely with the Duke University Registrar and the
              Academic Advising Center to make a tool that was accessible,
              useful, and accurate for students and advisors alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
