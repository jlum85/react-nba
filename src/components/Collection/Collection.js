import React from "react";
import "../../App.css";
import "./Collection.css";

import ShippingBar from "./ShippingBar.js";
import CollectionBar from "./CollectionBar.js";
import Items from "./Items.js";

const Collection = () => {
  return (
    <>
      <section id="collection" className="collection">
        <ShippingBar></ShippingBar>
        <CollectionBar></CollectionBar>

        <Items></Items>
      </section>
    </>
  );
};

export default Collection;
