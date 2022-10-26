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
          <p>
            Website coming soon! For enquiries or a free design consultation
          </p>
        </div>
      </main>
      <a className="cta" href="mailto:jill@jillzenderacreativestudio.com">
        contact us
      </a>
    </div>
  );
}
