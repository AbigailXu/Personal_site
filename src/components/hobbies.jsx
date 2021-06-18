import React, {Fragment, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";

import "../styles/hobbies.css";

import Ski from "../images/ski.JPG";

const hobbies = [
    "Downhill skiing",
    "Drawing",
    "Web development",
    "Watching anime & manga",
    "Listening to all kinds of music",
  ];

const Education = () => {
    useEffect(() => {
    Aos.init({ duration: 1500 });
  });
    return ( 
        <Fragment>
            <div className="col col-lg-6 col-12">
                <div>
                  <ul>
                    <li className="about-ls1-item">
                      {hobbies.map((s) => {
                        return <div  className="about-ls1-2" data-aos={"slide-right"}><FontAwesomeIcon
                        className="point-icon-2"
                        icon={["fas", "heart"]}
                      />
                      <span className="point-text-l1">
                        <h4>{s}</h4>
                      </span></div>;
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col-lg-6 col-12" data-aos={"slide-left"}>
                <img className="uw-icon ski-img" src={Ski} alt="uw icon" />
              </div>
        </Fragment>
     );
}
 
export default Education;