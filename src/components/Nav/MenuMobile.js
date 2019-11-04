import React from "react";
import "../../App.css";
import "./Header.css";

const MenuMobile = () => {
  return (
    <>
      <nav className="menuMobile">
        <svg
          className="burger"
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
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </nav>
    </>
  );
};

export default MenuMobile;
