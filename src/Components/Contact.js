import React from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="footer">
      <section>
        <h2>Contact Us on </h2>
        <p>
          <span>Email</span> balmybakes@gmail.com
        </p>
        <div className="icons">
          <span className="icons-span">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
