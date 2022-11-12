import React from "react"
import "../assets/scss/Header.scss"
import logo from "../assets/images/AR Shakir.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div class="header">
      <div class="header_logo_box">
        <img src={logo} alt="AR SHAKIR" />
      </div>
      <div class="header_item_box">
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
      <div class="header_buttons_box">
        <button>Sign In</button>
        <button>Start Free</button>
      </div>
    </div>
  )
}

export default Header
