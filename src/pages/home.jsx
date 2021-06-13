import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/home-pg1.css";
import "../styles/page2.css";

import Page2Up from "../components/page2_up.jsx";
import Cover from "../components/cover.jsx";
import bg from "../images/bg.jpg";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);

  // const ref = useRef(null);


  return (
    <div >
      <Cover />
      <Page2Up/>
    </div>
  );
  //   }
};

export default Home;
