import React from "react";
import "../../App.css";
import "./Header.css";
import MenuDesktop from "./MenuDesktop.js";
import MenuMobile from "./MenuMobile.js";

const Header = () => {
  return (
    <header>
      <div id="headerLeft" className="headerLeft">
        <h1 className="hl-item logo">Nba Store</h1>
        <svg
          className="logoTheme"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      </div>
      <MenuDesktop></MenuDesktop>
      <MenuMobile></MenuMobile>
    </header>
  );
};

export default Header;
