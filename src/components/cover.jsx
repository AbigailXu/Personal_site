import React, { Fragment, useEffect, useState } from "react";
import portrait1 from "../images/portrait1.jpeg";
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
      
      <div className="home-pg1">
        <div className="home-pg1-anime">
          <div
            className="home-pg1-left"
            style={{
              transform: "translate(" + offset * 1 + "vw, 0px",
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
                  onClick={() =>
                    window.open("mailto:x389xu@uwaterloo.ca")
                  }
                />
                <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fab", "github-square"]}
                  onClick={() => window.open("https://github.com/AbigailXu")}
                />
                <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fab", "linkedin"]}
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/xianglei-xu/")
                  }
                />
                <FontAwesomeIcon
                  className="social-media-icon"
                  icon={["fab", "instagram-square"]}
                  onClick={() =>
                    window.open("https://www.instagram.com/abigail_ouo/")
                  }
                />
              </div>
            </div>
          </div>
          <div
            className="home-pg1-portrait"
            style={{
              transform: "translate(" + offset * 1.5 + "vw, 0px",
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
              transform: "translate(-" + offset * 1.5 + "vw, 0px",
              opacity: 100 - offset * 1.5 + "%",
            }}
          >
            {/* <div className="home-pg1-text-2">
              <h1>AX</h1>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cover;
