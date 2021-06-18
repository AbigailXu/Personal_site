import React, { Fragment, Component } from "react";
import "../styles/page2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Page2 extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="p2-title">WELCOME!</h1>
        <h4 className="p2-sub">to Abi's personal website</h4>
        <div class="container page2-links">
          <div class="row">
            <div class="col col-lg-4 col-12">
              <a class="page2-link-inner" href="/about">
                <FontAwesomeIcon
                  className="p2-icon-2"
                  icon={["far", "user-circle"]}
                />
                <h5 className="p2-sub">ABOUT ME</h5>
              </a>
            </div>
            <div class="col col-lg-4 col-12">
              <a class="page2-link-inner" href="/projects">
                <FontAwesomeIcon
                  className="p2-icon-2"
                  icon={["fas", "project-diagram"]}
                />
                <h5 className="p2-sub">MY PROJECTS</h5>
              </a>
            </div>
            <div class="col col-lg-4 col-12">
              <a class="page2-link-inner" href="/">
                <FontAwesomeIcon
                  className="p2-icon-2"
                  icon={["far", "comments"]}
                />
                <h5 className="p2-sub">CONTACT ME</h5>
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Page2;
