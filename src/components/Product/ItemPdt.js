import React from "react";
import "../../App.css";
import "./Product.css";

const ItemPdt = props => {
  return (
    <>
      <div className="product-item">
        <div className="product-info">
          <p>{props.desc}</p>
          <p className="pdt-price">45$</p>

          <form>
            <input type="button" className="btn-product" value="Buy me" />
          </form>
        </div>
        <div className="img-hover-zoom">
          <img src={props.url} alt={props.desc}></img>
        </div>
      </div>
          
    </>
  );
};

export default ItemPdt;
