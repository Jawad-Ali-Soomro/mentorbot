import React from 'react'
import '../_styles/_header.scss'
import { useState } from 'react'
import { BiHome, BiLogIn, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoTwitter, BiUser } from 'react-icons/bi'
import { IoHomeOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { RiDashboardLine } from 'react-icons/ri'
import { CgArrowLongRight, CgCode } from 'react-icons/cg'
import { FcStart } from 'react-icons/fc'

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
      <div className="main-menu flex col" style={{ transform: `${showMenu ? "translateY(0%)" : "translateY(-100%)"}` }}>
        <div className="top-menu flex" style={{ transform: `${showMenu ? "translateX(0)" : "translateX(-100%)"}` }}>
          <ul className="flex col">
            <li className='flex'>Home <span><IoHomeOutline /></span></li>
            <li className='flex'>Dashboard <span><RiDashboardLine /></span></li>
            <li className='flex'>Code <span><CgCode /></span></li>
            <li className='flex'>Profile <span><BiUser /></span></li>
            <li className='flex line'>Get Started <span><CgArrowLongRight /></span></li>
          </ul>
         
        </div>
        <div className="bottom-menu flex col" style={{ transform: `${showMenu ? "translateX(0%)" : "translateX(100%)"}` }}>
        
          <div className="links flex">
            <div className="link flex">
              <BiLogoFacebook />
            </div>
            <div className="link flex">
              <BiLogoTwitter />
            </div>
            <div className="link flex">
              <BiLogoInstagram />
            </div>
            <div className="link flex">
              <BiLogoGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header