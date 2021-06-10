import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/home-pg1.css";
import "../styles/page2.css";

import Page2 from "../components/page2.jsx";
import Cover from "../components/cover.jsx";

const Home = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        console.log(ref)
        console.log(element.querySelector(".page2-container"));
        gsap.fromTo(
          element.querySelector(".page2-container"),
          {
            opacity: 0,
            y: 0,
          },
          {
            opacity:1,
            y: -400,
            scrollTrigger: {
                trigger: element.querySelector(".page2-container"),
                start: "top bottom-=5px",
                end: "top bottom-=30px",
                scrub: true,
                markers: true,

              }
          }
        );
        
      }, []);

    return (
      <div ref={ref}>
        <Cover /> 
        <div className="page2-container" ><Page2/></div>
        
      </div>
    );
//   }
}

export default Home;
