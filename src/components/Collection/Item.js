import React from "react";
import "../../App.css";
import "./Collection.css";

const Item = props => {
  return (
    <>
      <div className="collection-item">
        <img src={props.url} alt={props.desc} />
        <div className="collection-info">
          <h3>{props.desc}</h3>
          <a href="#">explore</a>
        </div>
      </div>
    </>
  );
};

export default Item;
