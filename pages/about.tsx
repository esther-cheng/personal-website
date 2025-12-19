"use client";
import "../styles/about.css";
import "../app/globals.css";
import Header from "../components/header";

export default function About() {
  return (
    <div className="body">
      <Header activeLink="about" />
      <div className="appears">
        <div className="about-container">
          <img
            src="/img/esther-table.jpg"
            alt="Me at a restaurant in Chapel Hill"
            id="table-photo"
          />
          <div className="about-text-container">
            <h3 className="about-subtitle">
              <i>Hello World!</i> I'm Esther, and I'm a current junior at Duke
              University in Durham, North Carolina.
            </h3>
            <p className="about-me-blurb">
              I am a computer science and psychology double major who loves to
              meet people, learn about their interests, and listen to their life
              stories. I am also an avid crocheter (you can check out some of my
              projects
              <a href="myinterests"> here</a>!)
            </p>
            <p className="about-me-blurb">
              I am currently a student developer at the Duke University
              Innovation Co-Lab, where I hold office hours and work on exciting
              projects. This semester, I am working on a website for the Duke
              Bluesmith, which provides specialty 3D printing services for the
              Duke population!
            </p>
          </div>
        </div>

        <div className="about-container" id="second">
          <div className="about-text-container" id="second-text">
            <h3 className="about-subtitle" id="second-subtitle">
              What I've Been Up To
            </h3>
            <p className="about-me-blurb">
              I just finished an internship with Deutsche Bank where I worked
              with the Global Receipts Platform team to further develop robust
              message handling and discard logic for pending DTC events. I also
              designed an ESG analytics microservice for Deutsche Bank document
              analysis!
            </p>
            <p className="about-me-blurb">
              This semester, I will be taking Psychology of Cooperation
              (PSY340S), Leadership and Collaboration (SOC227), Personality and
              Individual Differences (PSY321S), Warping Time in Fiction and Film
              (CINE190S), and Intro to Weightlifting (PHYSEDU113).
            </p>
            <p className="about-me-blurb">
              I'll also be TAing Computer Architecture (CS/ECE250) for the
              fourth semester. I loved learning about the mechanisms behind
              technology, and I’m excited I get to teach it, too!
            </p>
          </div>
          <img
            src="/img/esther-gardens.jpg"
            alt="Me at the Duke Gardens"
            id="gardens-photo"
          />
        </div>

        <a href="#" className="jump">
          Jump to top
        </a>
      </div>
    </div>
  );
}
