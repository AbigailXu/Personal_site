import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './ScrollToTop.css'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div className="up" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
      <FontAwesomeIcon className="up-icon" icon={['fas', 'arrow-up']} />
    </div>
  )
}

export default ScrollToTop
