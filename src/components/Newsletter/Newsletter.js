import React from "react";
import "../../App.css";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter">
        <p>Sign up for our newsletter and stay informed</p>
        <div className="inputMail">
          <label htmlFor="email">
            <svg
              className="envelope"
              width="24px"
              height="16px"
              viewBox="0 0 24 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-labelledby="emailLabelID"
              role="img"
            >
              {" "}
              <title id="emailLabelID">Enter Your Email Address</title>
              <g
                transform="translate(-541.000000, -4245.000000)"
                fill="#484848"
              >
                {" "}
                <g transform="translate(0.000000, 3120.000000)">
                  {" "}
                  <g transform="translate(180.000000, 1054.000000)">
                    {" "}
                    <g transform="translate(361.000000, 71.000000)">
                      {" "}
                      <path d="M16.859,6.296 L23,1.628 L23,14.203 L16.859,6.296 Z M7.936,6.9 L10.906,9.158 C11.214,9.391 11.607,9.507 12,9.507 C12.394,9.507 12.787,9.391 13.094,9.158 L16.063,6.901 L22.354,15 L1.634,15 L7.936,6.9 Z M7.14,6.295 L1,14.186 L1,1.628 L7.14,6.295 Z M12.489,8.362 C12.23,8.559 11.773,8.56 11.512,8.362 L1.827,1 L22.174,1 L12.489,8.362 Z M22.497,0 L1.503,0 C0.674,0 0,0.676 0,1.507 L0,14.493 C0,15.324 0.674,16 1.503,16 L22.497,16 C23.326,16 24,15.324 24,14.493 L24,1.507 C24,0.676 23.326,0 22.497,0 L22.497,0 Z" />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </label>
          <input type="email" id="email" placeholder="Enter your email here" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
