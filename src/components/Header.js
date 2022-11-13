import { React, useEffect, useState } from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/AR Shakir.svg"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  
  return (
    <nav className="navigation">
      <button onClick={toggleNav} className="nav-toggle">
        MENU
      </button>
      {(toggleMenu || screenWidth > 870) && (
        <div className="header">
          <div className="header_logo_box">
            <img src={logo} alt="AR SHAKIR" />
          </div>
          <div className="header_item_box">
            <ul>
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#">Template</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Prizing</Link>
              </li>
            </ul>
          </div>
          <div className="header_buttons_box">
            <button>Sign In</button>
            <button>Start Free</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
