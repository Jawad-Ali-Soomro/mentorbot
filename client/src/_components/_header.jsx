import React from 'react'
import '../_styles/_header.scss'
import { useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  return (
    <div className='header-container flex'>
      <div className="logo flex">
        <img src="/logo.png" alt="" />
      </div>
      <div className="menu flex col" data-after={showMenu ? "OPENED" : "CLOSED"} onClick={() => setShowMenu(!showMenu)}>
        <div className="bar" style={{ transform: `${showMenu ? 'rotate(45deg)' : ""}`, position: `${showMenu ? "absolute" : ""}` }}></div>
        <div className="bar" style={{ opacity: `${showMenu ? "0" : ""}` }}></div>
        <div className="bar" style={{ transform: `${showMenu ? 'rotate(-45deg)' : ""}`, position: `${showMenu ? "absolute" : ""}` }}></div>
      </div>
      <div className="main-menu flex col" style={{transform:`${showMenu ? "translateY(0%)" : "translateY(-100%)"}`}}>
        <div className="top-menu flex" style={{ transform: `${showMenu ? "translateX(0)" : "translateX(-100%)"}` }}>
          <ul className="flex col">
            <li>Home</li>
            <li>Resources</li>
            <li>Code</li>
            <li>Mentorship</li>
            <li>Features</li>
          </ul>
          
        </div>
        <div className="bottom-menu flex col"  style={{transform:`${showMenu ? "translateX(0%)" : "translateX(100%)"}`}}></div>
      </div>
    </div>
  )
}

export default Header