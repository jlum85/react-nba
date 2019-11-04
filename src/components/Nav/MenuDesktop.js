import React from "react";
import "../../App.css";
import "./Header.css";
import Cart from "./Cart.js";

const MenuDesktop = () => {
  return (
    <>
      <nav>
        <ul className="menuDesktop">
          <li className="menu-itemsD">
            <a href="#collection">Collection</a>
          </li>
          <li className="menu-itemsD">
            <a href="#product">Products</a>
          </li>
          <li className="menu-itemsD">
            <a href="#philosophy">Philosophy</a>
          </li>
        </ul>
        <Cart></Cart>
      </nav>
    </>
  );
};

export default MenuDesktop;
