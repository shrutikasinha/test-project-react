import React from "react";

import Asset204 from "../images/Asset 204.png";
import Asset205 from "../images/Asset 205.png";
import Asset206 from "../images/Asset 206.png";
import Asset203 from "../images/Asset 203.png";
import Asset202 from "../images/Asset 202.png";
import Asset201 from "../images/Asset 201.png";

const About = () => {
  return (
    <div id="about" className="grid-container-about">
      <div className="itemHeader">
        <div className="about-logos-header">
          <img src={Asset205} />
          <img src={Asset206} style={{ marginTop: "2em" }} />
        </div>
        <img src={Asset204} />
      </div>
      <div className="itemContent">
        <section>
          <h1>ABOUT US</h1>
          <p className="font-color-para">
            Golden Carrot Capital (GC.Capital) is a premier investment firm
            dedicated empowering growth and innovation across various
            industries. Founded on the principles of excellence, intergrity, and
            strategic foresight, we specialize in providing capital solutions
            and strategic guidance to buinesses poised for expansion and
            success.
          </p>
        </section>
      </div>
      <div className="itemFooter">
        <div className="inline">
          <img src={Asset203} />
          <img src={Asset202} />
        </div>
        <img src={Asset201} />
      </div>
    </div>
  );
};

export default About;
