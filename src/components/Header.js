import React from "react";

import { navHeader } from "../constants/consts";
import "./styles.css";
import Asset01 from "../images/Asset01.png";

const Header = () => {
  return (
    <div>
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
