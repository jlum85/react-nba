import React from "react";
import "../../App.css";
import "./Product.css";
import CategoryButton from "../Common/CategoryButton.js";

const ProductBar = () => {
  return (
    <>
      <div className="section-top-bar">
        <CategoryButton name="Equipes"></CategoryButton>
        <div className="product-badge">
          <span>Spring summer collection</span>
        </div>
      </div>
    </>
  );
};

export default ProductBar;
