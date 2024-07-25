import React from "react";

import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Teams from "./components/Teams";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Teams />
      <Contact />
    </>
  );
};

export default App;
