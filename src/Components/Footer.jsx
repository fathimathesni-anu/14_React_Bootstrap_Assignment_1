import React from "react";
import { Container } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <Container fluid className="p-4 bg-success text-white text-center">
        <p>
          &copy; 2024{" "}
          <a
            href="https://www.keralatouronline.in"
            target="_blank"
            rel="noopener noreferrer" 
            id="footer-link"
            className="text-white text-decoration-none"
          >
            keralatouronline.
          </a>{" "}
          All rights reserved.
        </p>
        <div className="d-flex justify-content-center social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
