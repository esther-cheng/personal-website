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
    <div className={`header ${activeLink === "about" ? "about-active" : ""}`}>
      <a href="/." className="home">
        <svg
          className="home-icon"
          viewBox="0 0 32 32"
          aria-label="Home"
          role="img"
        >
          <path
            fill="currentColor"
            d="M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z"
          />
        </svg>
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
