import React from "react"
import "../assets/scss/Header.scss"
import logo from "../assets/images/AR Shakir.png"

const Header = () => {
  return (
    <div class="header">
      <div class="header_logo_box">
        <img src={logo} alt="AR SHAKIR" />
      </div>
      <div class="header_item_box">
        <ul>
          <li>Product</li>
          <li>Template</li>
          <li>Blog</li>
          <li>Prizing</li>
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
