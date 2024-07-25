import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Layer from "./images/Layer.png";
import Breadcrumb from "./images/Breadcrumb.png";
import Asset04 from "./images/Asset04.png";

import About from "./components/About";
import Teams from "./components/Teams";
import Contact from "./components/Contact";

const style = {
  backgroundImage: `url(${Layer}), url(${Breadcrumb}), url(${Asset04})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "black",
};

const App = () => {
  return (
    <>
      <Outlet />
      <div id="home" style={style}>
        <Header />
      </div>
      <About />
      <Teams />
      <Contact />
    </>
  );
};

export default App;
