import React, { Component, Fragment } from "react";
import "../styles/about.css";

import Education from '../components/education';
// import Hobbies from '../components/hobbies';
import Skill from "../components/skills";
import Skill2 from "../components/skills2";


class Projects extends Component {
  state = {
    skills: [
      {skill:"Frontend", pack:"far", name:"object-ungroup", dir:1},
      {skill:"JavaScript", pack:"fab", name:"js-square", dir:2},
      {skill:"HTML", pack:"fab", name:"html5", dir:1},
      {skill:"CSS", pack:"fab", name:"css3-alt", dir:2},
      {skill:"React.js", pack:"fab", name:"react", dir:1},
      {skill:"Bootstrap", pack:"fab", name:"bootstrap", dir:2},
      {skill:"Backend", pack:"fas", name:"code-branch", dir:1},
      {skill:"Node.js", pack:"fab", name:"node-js", dir:2},
      {skill:"Express.js", pack:"fab", name:"node-js", dir:1},
      {skill:"MongoDB", pack:"fas", name:"database", dir:2},
      {skill:"Java", pack:"fab", name:"java", dir:1},
    ],
    skills2:[
      {skill:"C-programming", img:"https://img.icons8.com/ios-filled/50/000000/c.png", dir:2},
      {skill:"C++", img:"https://img.icons8.com/ios/70/000000/c-plus-plus-logo.png",dir:1},
      {skill:"BASH", img:"https://img.icons8.com/carbon-copy/90/000000/console.png",dir:2}
    ]
  };

  render() {
    const p = this.state.Projects;
    console.log(p);
    return (
      <Fragment>
      <div className="overflow-wrapper">
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
                     {this.state.skills2.map((s)=>{
                      return(<Skill2
                        skill={s.skill}
                        dir={s.dir}
                        img={s.img}
                      />)
                    })}
                  </div>
                  {/* <Skill/> */}
                </div>
              </div>
              {/* <h2 className="about-sub-title">Hobbies:</h2>
                <Hobbies/> */}
            </div>
          </div>
        </div>

      </div>
      </Fragment>
    );
  }
}

export default Projects;
