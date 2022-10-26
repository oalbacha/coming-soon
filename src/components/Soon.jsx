import React from "react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa/index.js";
import "./Soon.css";

export default function Soon() {
  return (
    <div className="page">
      <header className="header">
        <a
          className="icon-container"
          href="https://wa.me/+971569944617?lang=en"
          title="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
        </a>
        <a
          className="icon-container"
          href="https://www.linkedin.com/company/jill-zendera-creative-studio/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </header>

      <main className="content">
        <img
          className="logo"
          src="./images/ttp-square-logo.svg"
          alt="the therapy place uk logo"
        />
        <div className="copy">
          <h1>Jill Zendera Creative Studio</h1>
          <p>
            Website coming soon. Please check back soon or email us to book a
            session today.
          </p>
        </div>
      </main>
      <a className="cta" href="mailto:jill@jillzenderacreativestudio.com">
        Send us an email
      </a>
    </div>
  );
}
