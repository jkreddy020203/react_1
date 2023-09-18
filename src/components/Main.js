import React, { useState } from "react";
import Color from "./Color";
import Info from "./Info";

import "./Main.css";

const Main = () => {
  const [show, setShow] = useState(true);

  const colorHandler = () => {
    setShow(true);
  };

  const infoHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="buttons">
        <button onClick={colorHandler}>Color</button>
        <button onClick={infoHandler}>Information</button>
      </div>
      {show && <Color />}
      {show || <Info />}
    </div>
  );
};

export default Main;
