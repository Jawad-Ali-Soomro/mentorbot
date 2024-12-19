import React from 'react'
import '../_styles/_header.scss'
import { useState } from 'react'
import { BiCode, BiEdit, BiEditAlt, BiHome, BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoTwitter, BiPencil, BiSolidDashboard, BiUser } from 'react-icons/bi'
import { GrDashboard } from 'react-icons/gr'
import { MdDashboard } from 'react-icons/md'
import { TbDashboard } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'
import { RiDashboardLine } from 'react-icons/ri'

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
      <div className="main-menu flex col" style={{ transform: `${showMenu ? "translateY(0%)" : "translateY(-150%)"}` }}>
        <div className="top-menu flex">
          <div className="navs flex col">
            <div className="nav flex">
              <BiHome />
            </div>
            <div className="nav flex">
              <RiDashboardLine />
            </div>
            <div className="nav flex">
              <BiCode />
            </div>
            <div className="nav flex">
              <BiPencil />
            </div>
            <div className="nav flex">
              <BiUser />
            </div>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Header