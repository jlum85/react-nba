import React from "react";
import "../../App.css";

import Blazers from "../../images/Hat/Blazers.jpg";
import Bucks from "../../images/Hat/Bucks.jpg";
import Heat from "../../images/Hat/Heat.jpg";
import Pacers from "../../images/Hat/Pacers.jpg";

import Item from "./Item.js";

const Items = () => {
  return (
    <>
      <div className="product-items">
        <Item desc="Portland Blazers" price="45$" url={Blazers}></Item>
        <Item desc="Milwaukee Bucks" price="50$" url={Bucks}></Item>
        <Item desc="Miami Heat" price="65$" url={Heat}></Item>
        <Item desc="Indiana Pacers" price="60$" url={Pacers}></Item>
      </div>
    </>
  );
};

export default Items;
