import React from "react";
import "../../App.css";
import "./Collection.js";

const SeeMore = () => {
  return (
    <>
      <a className="see-more" href="#/">
        See more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </a>
    </>
  );
};

export default SeeMore;
