import React, {Fragment, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aos from "aos";
import "aos/dist/aos.css";

import UW from "../images/uw-icon.png";

const study = [
    "Algorithm Design",
    "Data Abstraction",
    "Logic and Computation",
    "OOP Software Development",
    "Probability Models",
  ];

const Education = () => {
    useEffect(() => {
    Aos.init({ duration: 1500 });
  });
    return ( 
        <Fragment>
            <div className="col col-lg-6 col-12">
                <div className="about-ls1" data-aos={"slide-right"}>
                  <ul>
                    <li className="about-ls1-item">
                      <FontAwesomeIcon
                        className="point-icon"
                        icon={["fas", "book"]}
                      />
                      <span className="point-text-l1">
                        Candidate of <b>Bachelor of Computer Science</b>
                      </span>
                      <div className="point-text-l2">
                        Institution: The University of Waterloo
                      </div>
                      <div className="point-text-l2">
                        Time of study: 2020-2025
                      </div>
                      <div className="point-text-l2">
                        Program: Computer Science
                      </div>
                      <div className="point-text-l2">
                        Key Study: Functional Programming
                      </div>
                      {study.map((s) => {
                        return <div className="point-text-l3">{s}</div>;
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col-lg-6 col-12" data-aos={"slide-left"}>
                <img className="uw-icon" src={UW} alt="uw icon" />
              </div>
        </Fragment>
     );
}
 
export default Education;