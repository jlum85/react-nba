import React from "react";
import "../../App.css";
import "./Footer.css";
import SocialNetwork from "./SocialNetwork.js";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="divFooter">
          <p>Nba Store 2019</p>
          <a href="https://www.lereacteur.io/" target="_blank">
            <p>Made at le Reacteur</p>
          </a>
          <SocialNetwork></SocialNetwork>
        </div>
      </footer>
    </>
  );
};

export default Footer;
