import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Main.css'
import Header from '../Header/Header'
import NavBar from '../NavBar/NavBar'
import Expertise from '../Expertise/Expertise'
import Projects from '../Projects/Projects'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const Main = () => {
  gsap.registerPlugin(ScrollTrigger)
  const headerRef = useRef(null)
  const expertiseRef = useRef(null)
  const projectRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  const headerRefScroll = () => headerRef.current.scrollIntoView()
  const expertiseRefScroll = () => expertiseRef.current.scrollIntoView()
  const projectRefScroll = () => projectRef.current.scrollIntoView()
  const experienceRefScroll = () => experienceRef.current.scrollIntoView()
  const contactRefScroll = () => contactRef.current.scrollIntoView()
  // const refScroll = useRef(null);

  return (
    <div id="main" ref={headerRef}>
      <NavBar
        headerRefScroll={headerRefScroll}
        expertiseRefScroll={expertiseRefScroll}
        projectRefScroll={projectRefScroll}
        experienceRefScroll={experienceRefScroll}
        contactRefScroll={contactRefScroll}
      />
      <Header />

      <div ref={expertiseRef}>
        <Expertise />
      </div>

      <div ref={projectRef}>
        <Projects />
      </div>

      <div ref={experienceRef}>
        <Experience />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <ScrollToTop />
    </div>
  )
  //   }
}

export default Main
