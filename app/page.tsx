"use client";
import "../styles/esthers-site.css";
import "./globals.css";
import Header from "./../components/header";

export default function Home() {
  return (
    <div className="body" id="home">
      <Header activeLink="home" />
      <div className="home-page-container">
        <div className="left">
          <img
            src="/img/emphasis.png"
            alt="emphasis lines"
            className="emphasis-lines"
          />
          <div className="welcome-container">
            <h1 className="welcome-title">Hey! I'm Esther.</h1>
            <h2 className="welcome-subtitle">Welcome to my page.</h2>
            <p className="welcome-blurb">
              I'm a Computer Science and Psychology student at Duke University.
              In my free time, I like to hang out with my dog and crochet!
            </p>
          </div>

          <div className="icons-container">
            <a href="https://github.com/esther-cheng">
              <img src="/img/github.png" alt="github" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/estcheng/">
              <img src="/img/linkedin.png" alt="linkedin" className="icon" />
            </a>
            <a href="/documents/EstherCheng.pdf">
              <img src="/img/page.png" alt="resume" className="icon" />
            </a>
            <a href="mailto:esther.cheng@duke.edu">
              <img src="/img/email.png" alt="email" className="icon" />
            </a>
          </div>
        </div>

        <div className="home-images-container">
          <img src="/img/blob.svg" alt="blob" className="home-image blob" />
          <img src="/img/Esther-Transparent.png" alt="me in 2024" className="home-image profile" />
        </div>
      </div>
    </div>
  );
}
