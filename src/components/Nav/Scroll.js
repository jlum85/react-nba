import React from "react";
import "../../App.css";
import "./Scroll.css";

const Scroll = () => {
  return (
    <>
      <div className="headerScroll">
        <div id="scrollContainer" className="progress-container">
          <div className="progress-bar" id="myScrollBar"></div>
        </div>
      </div>
    </>
  );
};

export default Scroll;
