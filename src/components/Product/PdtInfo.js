import React from "react";
import "../../App.css";
import "./Product.css";

const PdtInfo = props => {
  return (
    <>
      <div className="product-info">
        <p>{props.desc}</p>
        <p className="pdt-price">{props.price}</p>
        <form>
          <input type="button" className="btn-product" value="Buy me" />
        </form>
      </div>
    </>
  );
};

export default PdtInfo;
