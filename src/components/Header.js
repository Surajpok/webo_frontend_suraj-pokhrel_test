import React from "react"
import "../assets/scss/Header.scss"
import logo from "../assets/images/AR Shakir.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navigation">
      <button className="nav-toggle">BTN</button>
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
    </nav>
  )
}

export default Header
