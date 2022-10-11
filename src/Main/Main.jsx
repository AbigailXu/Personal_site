import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Main.css";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Expertise from "../Expertise/Expertise";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";



const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  // const ref = useRef(null);


  return (
    <div id="main">
      <NavBar/>
      <Header/>
      <Expertise/>
      <Projects/>
      <Experience/>
    </div>
  );
  //   }
};

export default Main;
