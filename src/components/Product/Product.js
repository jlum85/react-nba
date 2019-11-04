import React from "react";
import "../../App.css";
import "./Product.css";

import Items from "./Items.js";
import ProductBar from "./ProductBar.js";

const Product = () => {
  return (
    <>
      <section id="product" className="product">
        <ProductBar></ProductBar>
        <Items></Items>
        <button className="browse">Browse all</button>
      </section>
    </>
  );
};

export default Product;
