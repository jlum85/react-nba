import React from "react";
import "../../App.css";
import "./Product.css";

const PdtImage = props => {
  return (
    <>
      <div className="img-hover-zoom">
        <img src={props.url} alt={props.desc}></img>
      </div>
    </>
  );
};

export default PdtImage;
