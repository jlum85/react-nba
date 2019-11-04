import React from "react";
import "../../App.css";
import "./Collection.css";
import CategoryButton from "../Common/CategoryButton.js";
import SeeMore from "./SeeMore.js";

const CollectionBar = () => {
  return (
    <>
      <div className="section-top-bar">
        <CategoryButton name="Collection"></CategoryButton>
        <SeeMore></SeeMore>
      </div>
          
    </>
  );
};

export default CollectionBar;
