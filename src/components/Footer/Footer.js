import React from "react";
import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="divFooter">
          <p>Nba Store 2019</p>

          <a href="https://www.lereacteur.io/" target="_blank">
            <p>Made at le Reacteur</p>
          </a>

          <div className="socialNetwork">
            <a href="https://www.facebook.com/LeReacteurIO/" target="_blank">
              <svg
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
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1
                    1 0 0 1 1-1h3z "
                ></path>
              </svg>
            </a>

            <a href="https://twitter.com/lereacteurIO" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24 "
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48
                    4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z "
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
