import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/skills.css";
import { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Skill = ({ skill, img, dir}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div data-aos={dir===1 ? "slide-right" : "slide-left" } className="box" id="oval">
      <div className="skill-content">
        <img 
        className="skill-icon" src={img} alt={skill} />
        {skill}
      </div>
    </div>
  );
};

export default Skill;
