import React from "react";
import "../../App.css";

import Blazers from "../../images/Hat/Blazers.jpg";
import Bucks from "../../images/Hat/Bucks.jpg";
import Heat from "../../images/Hat/Heat.jpg";
import Pacers from "../../images/Hat/Pacers.jpg";

import Item from "./Item.js";

const Items = () => {
  const pdts = [
    { desc: "Portland Blazers", url: Blazers, price: "45$" },
    { desc: "Milwaukee Bucks", url: Bucks, price: "50$" },
    { desc: "Miami Heat", url: Heat, price: "65$" },
    { desc: "Indiana Pacers", url: Pacers, price: "60$" }
  ];

  const elements = pdts.map((pdt, n) => {
    return (
      <Item key={n} desc={pdt.desc} price={pdt.price} url={pdt.url}></Item>
    );
  });

  return (
    <>
      <div className="product-items">
        {elements}
        {/* <Item desc="Portland Blazers" price="45$" url={Blazers}></Item>
        <Item desc="Milwaukee Bucks" price="50$" url={Bucks}></Item>
        <Item desc="Miami Heat" price="65$" url={Heat}></Item>
        <Item desc="Indiana Pacers" price="60$" url={Pacers}></Item> */}
      </div>
    </>
  );
};

export default Items;
