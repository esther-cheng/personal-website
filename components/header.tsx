import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./../styles/header.css";

interface HeaderProps {
  activeLink: string;
}

export default function Header({ activeLink }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".hamburger") && !target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header">
      <a href="/." className="home">
        <img src="/img/home.svg" alt="Home" className="home-icon" />
      </a>

      {/* Desktop navigation */}
      <div className="links">
        <a href="/about" className={activeLink === "about" ? "active" : ""}>
          About
        </a>
        <a
          href="/projects"
          className={activeLink === "projects" ? "active" : ""}
        >
          Past Work
        </a>
        <a
          href="/myinterests"
          className={activeLink === "myinterests" ? "active" : ""}
        >
          My Interests
        </a>
      </div>

      {/* Hamburger menu button */}
      <div
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile navigation menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <a
          href="about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </a>
        <a
          href="projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Past Work
        </a>
        <a
          href="myinterests"
          className={activeLink === "myinterests" ? "active" : ""}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          My Interests
        </a>
      </div>
    </div>
  );
}
