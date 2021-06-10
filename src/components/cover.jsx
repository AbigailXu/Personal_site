import React, { Fragment, useEffect, useState } from "react";
import NavBar from "../components/navbar.jsx";
import portrait1 from "../images/portrait1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cover = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const pageYOffset = window.pageYOffset;
      setOffset(pageYOffset > 0 ? pageYOffset : 0);
    };
  }, []);

  // console.log(window.pageYOffset);

  return (
    <Fragment>
      {/* <h1 className="animate__animated animate__slideOutLeft">
          An animated element
        </h1> */}
      <NavBar />
      <div className="home-pg1">
        <div className="home-pg1-anime">
          <div
            className="home-pg1-left"
            style={{
              transform: "translate(-" + offset * 1 + "vw,0",
              opacity: 100 - offset * 1.5 + "%",
            }}
          >
            <div className="home-pg1-text-1">
              <h1>ABIGAIL XU</h1>
              <h5>2nd year CS student @ The University of Waterloo</h5>
              <h5>Engaging in:</h5>
              <h5>
                <strong>Full-stack Web Development</strong>
              </h5>
              <div className="social-media-group">
              <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fas", "envelope-square"]}
                />
                <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fas", "phone-volume"]}
                />
                <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fab", "linkedin"]}
                />
                <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fab", "instagram-square"]}
                />
              </div>
            </div>
          </div>
          <div
            className="home-pg1-portrait"
            style={{
              transform: "translate(" + offset * 1.5 + "vw,0",
              opacity: 100 - offset * 15 + "%",
            }}
          >
            <img
              className="home-pg1-portrait-img"
              src={portrait1}
              alt="portrait"
            />
          </div>
          <div
            className="home-pg1-right"
            style={{
              transform: "translate(" + offset * 1.5 + "vw,0",
              opacity: 100 - offset * 1.5 + "%",
            }}
          >
            <div className="home-pg1-text-2">
              <h1>AX</h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cover;
