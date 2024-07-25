import React from "react";

import LastLayer from "../images/LastLayer.png";

const Contact = () => {
  return (
    <footer id="contact-us" className="blackBackground">
      <img src={LastLayer} />
      <div className="grid-container-contact">
        <div className="grid-item-contact" style={{ width: "200px" }}>
          Golden Carrot Capital (GC.Capital) is a premier investment firm
          dedicated empowering growth and innovation across various industries.
        </div>
        <div className="grid-item-contact">
          <ul>
            <span className="header-color">General</span>
            <li>
              <a className="anchor-style" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="anchor-style" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="anchor-style" href="#teams">
                Team
              </a>
            </li>
          </ul>
        </div>
        <div class="grid-item-contact">
          <ul>
            <span className="header-color">Resources</span>
            <li>
              <a className="anchor-style" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer className="footer">GC CAPITAL © 2024</footer>
    </footer>
  );
};

export default Contact;
