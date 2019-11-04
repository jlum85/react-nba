import React from "react";
import "../../App.css";
import "./CategoryButton.css";

const CategoryButton = props => {
  return (
    <>
      <a href="#">
        <h3 className="section-category">{props.name}</h3>
      </a>
          
    </>
  );
};

export default CategoryButton;
