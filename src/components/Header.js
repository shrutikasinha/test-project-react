import React from "react";

import { navHeader } from "../constants/consts";
import "./styles.css";
import Asset01 from "../images/Asset01.png";
import Layer from "../images//Layer.png";
import Breadcrumb from "../images/Breadcrumb.png";
import Asset04 from "../images/Asset04.png";

const style = {
  backgroundImage: `url(${Layer}), url(${Breadcrumb}), url(${Asset04})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "black",
};

const Header = () => {
  return (
    <div id="home" style={style}>
      <nav>
        {navHeader.map((item) => {
          return (
            <li key={item.id}>
              <a className={"anchorHeader"} href={`#${item.id}`}>
                {item.name}
              </a>{" "}
            </li>
          );
        })}
      </nav>
      <div style={{ textAlign: "center" }}>
        <img src={Asset01} width={200} />
      </div>
    </div>
  );
};

export default Header;
