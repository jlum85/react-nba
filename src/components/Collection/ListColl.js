import React from "react";
import "../../App.css";

import Boston from "../../images/TShirt/boston.jpg";
import Lakers from "../../images/TShirt/lakers.jpg";
import Rocket from "../../images/TShirt/rocket.jpg";

import ItemColl from "./ItemColl.js";

const ListColl = () => {
  return (
    <>
      <div className="collection-items">
        <ItemColl desc="Boston Celtics" url={Boston}></ItemColl>
        <ItemColl desc="Los Angeles Lakers" url={Lakers}></ItemColl>
        <ItemColl desc="Houston Rockets" url={Rocket}></ItemColl>

        <ItemColl desc="Boston Celtics" url={Boston}></ItemColl>
        <ItemColl desc="Los Angeles Lakers" url={Lakers}></ItemColl>
        <ItemColl desc="Houston Rockets" url={Rocket}></ItemColl>
      </div>
          
    </>
  );
};

export default ListColl;
