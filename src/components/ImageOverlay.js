import React from "react";

import "./ImageOverlay.css";
import LastBuildingBlock from "../images/LastBuildingBlock.png";
import LastCoin from "../images/LastCoin.png";

const ImageOverlay = () => {
  return (
    <div className="image-container">
      <img src={LastBuildingBlock} className="background-image" />
      <img src={LastCoin} alt="Overlay Top" className="overlay-image top" />
      <img
        src={LastCoin}
        alt="Overlay Bottom"
        className="overlay-image bottom"
      />
    </div>
  );
};

export default ImageOverlay;
