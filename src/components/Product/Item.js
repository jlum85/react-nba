import React from "react";
import "../../App.css";
import "./Product.css";
import PdtImage from "./PdtImage.js";
import PdtInfo from "./PdtInfo.js";

const Item = props => {
  return (
    <>
      <div className="product-item">
        {/* <div className="product-info">
          <p>{props.desc}</p>
          <p className="pdt-price">45$</p>

          <form>
            <input type="button" className="btn-product" value="Buy me" />
          </form>
        </div> */}
        <PdtInfo desc={props.desc} price={props.price}></PdtInfo>
        <PdtImage url={props.url} desc={props.desc}></PdtImage>
      </div>
          
    </>
  );
};

export default Item;
