import React, { Component, Fragment } from "react";
import "../styles/about.css";

import Education from '../components/education';
import Skill from "../components/skills";


class Projects extends Component {
  state = {
    skills: [
      {skill:"Frontend Development", pack:"far", name:"object-ungroup", dir:1},
      {skill:"JavaScript", pack:"fab", name:"js-square", dir:2},
      {skill:"HTML", pack:"fab", name:"html5", dir:1},
      {skill:"CSS", pack:"fab", name:"css3-alt", dir:2},
      {skill:"React.js", pack:"fab", name:"react", dir:1},
      {skill:"Bootstrap", pack:"fab", name:"bootstrap", dir:2},
      {skill:"Backend Development", pack:"fas", name:"code-branch", dir:1},
      {skill:"Node.js", pack:"fab", name:"node-js", dir:2},
      {skill:"Express.js", pack:"fab", name:"node-js", dir:1},
      {skill:"MongoDB", pack:"fas", name:"database", dir:2},
      {skill:"Java", pack:"fab", name:"java", dir:1},
    ]
  };

  render() {
    const p = this.state.Projects;
    console.log(p);
    return (
      <Fragment>
        <div className="about-project-container">
          <h1 className="about-project-title">ABOUT ME</h1>
          <div className="about-container">
            <div class="row">
            <h2 className="about-sub-title">Education:</h2>
              <Education/>
              <div class="col col-12">
                <div className="about-ls2">
                  <h2 className="about-sub-title about-sub-title2">Skills:</h2>
                  <div className="skills" data-scroll-speed="1">
                    {this.state.skills.map((s)=>{
                      return(<Skill
                        skill={s.skill}
                        iconPack={s.pack}
                        iconName={s.name}
                        dir={s.dir}
                      />)
                    })}
                  </div>
                  {/* <Skill/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
