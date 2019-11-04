import React from "react";
import "../../App.css";

const ShippingBar = () => {
  return (
    <>
      <div className="shipping-bar">
        <p>Free shipping</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
          
    </>
  );
};

export default ShippingBar;
