import React from "react";
import "../../App.css";
import "./Collection.css";

import ShippingBar from "./ShippingBar.js";
import CollectionBar from "./CollectionBar.js";
import ListColl from "./ListColl.js";

const Collection = () => {
  return (
    <>
      <section id="collection" className="collection">
        <ShippingBar></ShippingBar>
        <CollectionBar></CollectionBar>

        <ListColl></ListColl>
      </section>
    </>
  );
};

export default Collection;
