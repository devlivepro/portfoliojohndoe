import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  // Mettre à jour l'état de l'élément actif lors du changement de l'emplacement
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg-color">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <h1>John Doe</h1>
        </Link>
        {/* Bouton de bascule pour le menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/service" ? "active" : ""
              }`}
            >
              <Link to="/service" className="nav-link">
                Services
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/project" ? "active" : ""
              }`}
            >
              <Link to="/project" className="nav-link">
                Projects
              </Link>
            </li>
            <li
              className={`nav-item ${activeLink === "/blog" ? "active" : ""}`}
            >
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li
              className={`nav-item ${
                activeLink === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
