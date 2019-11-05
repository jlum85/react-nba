import React from "react";
import "../../App.css";
import "./Collection.css";
import Item from "./Item.js";

import Boston from "../../images/TShirt/boston.jpg";
import Lakers from "../../images/TShirt/lakers.jpg";
import Rocket from "../../images/TShirt/rocket.jpg";

const Items = () => {
  const teams = [
    { desc: "Boston Celtics", url: Boston },
    { desc: "Los Angeles Lakers", url: Lakers },
    { desc: "Houston Rockets", url: Rocket },
    { desc: "Boston Celtics", url: Boston },
    { desc: "Los Angeles Lakers", url: Lakers },
    { desc: "Houston Rockets", url: Rocket }
  ];

  const elements = teams.map((team, n) => {
    return <Item key={n} desc={team.desc} url={team.url}></Item>;
  });

  return (
    <>
      <div className="collection-items">
        {elements}
        {/* <Item desc="Boston Celtics" url={Boston}></Item>
        <Item desc="Los Angeles Lakers" url={Lakers}></Item>
        <Item desc="Houston Rockets" url={Rocket}></Item>

        <Item desc="Boston Celtics" url={Boston}></Item>
        <Item desc="Los Angeles Lakers" url={Lakers}></Item>
        <Item desc="Houston Rockets" url={Rocket}></Item> */}
      </div>
          
    </>
  );
};

export default Items;
