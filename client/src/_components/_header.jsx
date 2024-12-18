import React from 'react'
import '../_styles/_header.scss'

const Header = () => {
  return (
      <div className='header-container flex'>
          <div className="logo flex">
              <img src="/logo.png" alt="" />
          </div>

          <div className="menu flex col">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </div>
    </div>
  )
}

export default Header