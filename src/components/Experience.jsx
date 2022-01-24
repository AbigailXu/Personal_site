import React, { Fragment, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import 'aos/dist/aos.css'

import SW from '../images/shareworks-by-morgan-stanley.png'

const study = [
  'Algorithm Design',
  'Data Abstraction',
  'Logic and Computation',
  'OOP Software Development',
  'Probability Models',
]

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  })
  return (
    <Fragment>
      <div class="col col-lg-6 col-12" data-aos={'slide-right'}>
        <img className="sw-icon" src={SW} alt="sw icon" />
      </div>
      <div className="col col-lg-6 col-12">
        <div className="about-ls1" data-aos={'slide-left'}>
          <br></br>
          <ul>
            <li className="about-ls1-item">
              <div className="point-text-l2">
                <b>Full-Stack Software Developer</b>
              </div>
              <div className="point-text-l2">
              9/2021 - 12/2021 (coop)
              </div>
              <div className="point-text-l2">
                Shareworks by Morgan Stanley
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Experience
