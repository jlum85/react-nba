import React from "react";
import "../../App.css";
import "./Collection.css";
import Item from "./Item.js";

import Boston from "../../images/TShirt/boston.jpg";
import Lakers from "../../images/TShirt/lakers.jpg";
import Rocket from "../../images/TShirt/rocket.jpg";

const Items = () => {
  return (
    <>
      <div className="collection-items">
        <Item desc="Boston Celtics" url={Boston}></Item>
        <Item desc="Los Angeles Lakers" url={Lakers}></Item>
        <Item desc="Houston Rockets" url={Rocket}></Item>

        <Item desc="Boston Celtics" url={Boston}></Item>
        <Item desc="Los Angeles Lakers" url={Lakers}></Item>
        <Item desc="Houston Rockets" url={Rocket}></Item>
      </div>
          
    </>
  );
};

export default Items;
