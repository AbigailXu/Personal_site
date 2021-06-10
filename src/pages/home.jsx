import React, { Fragment, useEffect, useState } from "react";
import "../styles/home-pg1.css";

import portrait1 from "../images/portrait1.jpg";
import NavBar from "../components/navbar.jsx";


const Home = () => {
  const [offset, setOffset, coverSlide] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
      coverSlide(setOffset>0 ? setOffset : 0);
    };
  }, []);

//   const trackScrolling = () => {
//     const wrappedElement = document.getElementById('header');
//     if (this.isBottom(wrappedElement)) {
//       console.log('header bottom reached');
//       document.removeEventListener('scroll', this.trackScrolling);
//     }
//   };

  console.log(window.pageYOffset);

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
              transform: "translate(-" + coverSlide * 1 + "vw,0",
              opacity: 100 - offset + "%",
            }}
          >
            <div className="home-pg1-text">
              <h1>ABIGAIL XU</h1>
              <h5>2nd year CS student @ The University of Waterloo</h5>
              <h5>Engaging in:</h5>
              <h5><strong>Full-stack Web Development</strong></h5>
            </div>
          </div>
            <div
              className="home-pg1-portrait"
              style={{
                transform: "translate(" + coverSlide * 1.5 + "vw,0",
                opacity: 100 - offset + "%",
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
                transform: "translate(" + coverSlide * 1.5 + "vw,0",
                opacity: 100 - offset + "%",
              }}
            ></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
