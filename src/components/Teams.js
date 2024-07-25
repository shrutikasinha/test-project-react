import React from "react";

import BreadcrumbLastPage from "../images/BreadcrumbLastPage.png";
import Carrot from "../images/Carrot.png";
import ImageOverlay from "./ImageOverlay";
import Human1 from "../images/Human1.png";
import Human2 from "../images/Human2.png";
import Human3 from "../images/Human3.png";
import Human4 from "../images/Human4.png";
import Brick from "../images/Brick.png";
import LastCoin from "../images/LastCoin.png";
import LogoCompany from "../images/LogoCompany.png";
import "./styles.css";

const Teams = () => {
  return (
    <div id="teams" className="blackBackground">
      <img src={BreadcrumbLastPage} />
      <div className="inline-image-teams">
        <img src={Carrot} />
        <ImageOverlay />
      </div>
      <section className="center-align">
        <h1>OUR TEAM</h1>
        <p class="grid-container-teams">
          <img src={Human1} className="profile-height" />
          <img src={Human2} className="profile-height" />
          <img src={Human3} className="profile-height" />
          <img src={Human4} className="profile-height" />
        </p>
        <p>
          <h1>PARTNER</h1>
          <img src={LogoCompany} />
        </p>
        <div className="inline">
          <div style={{ display: "grid" }}>
            <img src={LastCoin} className="teams-height" />
            <img src={Brick} className="teams-height" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
