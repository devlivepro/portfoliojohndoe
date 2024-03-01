import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-footer h6">
      <div className="footer-links">
        <div className="row py-5">
          {/* Première colonne */}
          <div className="col-md-3">
            <p>
              <h5>John Doe</h5>
              <p>228 Park Ave S, New York</p>
              <p>NY 10003, USA</p>
              <p>Phone: (123) 456-7890</p>
            </p>
            <div>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} size="xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/johndoe/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </div>
          </div>
          {/* Deuxième colonne */}
          <div className="col-md-3">
            <ul>
              <h5>Useful links</h5>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/">Home</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/about">About</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/service">Services</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/contact">Contact</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/legal">Legal Notice</a>
              </li>
            </ul>
          </div>
          {/* Troisième colonne */}
          <div className="col-md-3">
            <ul>
              <h5>Latest projects</h5>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Wellness area</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Fresh food</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="blog">Japanese restaurant</a>
              </li>
            </ul>
          </div>
          {/* Quatrième colonne */}
          <div className="col-md-3">
            <ul>
              <h5>Latest articles</h5>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Increase product sales</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Learn SEO</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Build a mock-up</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Learn CSS</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Learn Technologies</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#0d6efd" }}
                />{" "}
                <a href="/blog">Learn AI</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#000000" }}>
        <div className="col-md-12 text-center">
          <p className="footer color-official4">© 2024 Designed by John Doe</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
