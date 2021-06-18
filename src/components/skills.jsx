import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/skills.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Skill = ({ skill, iconPack, iconName, dir }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div data-aos={dir===1 ? "slide-right" : "slide-left" } className="box" id="oval">
      <div className="skill-content">
        <FontAwesomeIcon 
        className="skill-icon" icon={[iconPack, iconName]} />
        {skill}
      </div>
    </div>
  );
};

export default Skill;
