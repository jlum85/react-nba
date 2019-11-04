import React from "react";
import "../../App.css";
import "./Product.css";

import Blazers from "../../images/Hat/Blazers.jpg";
import Bucks from "../../images/Hat/Bucks.jpg";
import Heat from "../../images/Hat/Heat.jpg";
import Pacers from "../../images/Hat/Pacers.jpg";

import ItemPdt from "./ItemPdt.js";
import ProductBar from "./ProductBar.js";

const Products = () => {
  return (
    <>
      <section id="product" className="product">
        <ProductBar></ProductBar>
        <div className="product-items">
          <ItemPdt desc="Portland Blazers" url={Blazers}></ItemPdt>
          <ItemPdt desc="Milwaukee Bucks" url={Bucks}></ItemPdt>
          <ItemPdt desc="Miami Heat" url={Heat}></ItemPdt>
          <ItemPdt desc="Indiana Pacers" url={Pacers}></ItemPdt>
        </div>
        <button className="browse">Browse all</button>
      </section>
    </>
  );
};

export default Products;
