import React from "react";
import "../../App.css";
import "./Product.css";

const ProductBar = () => {
  return (
    <>
      <div className="section-top-bar">
        <a href="#">
          <h3 className="section-category">Equipes</h3>
        </a>
        <div className="product-badge">
          <span>Spring summer collection</span>
        </div>
      </div>
    </>
  );
};

export default ProductBar;
