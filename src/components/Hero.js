import React from "react"
import Header from "./Header"
import "../assets/scss/Hero.scss"
import Handimage from "../assets/images/hand.png"

const Hero = () => {
  return (
    <div class="hero_container">
      <Header />
      <div class="container">
        <div class="hero_title_box">
          <h1>Managing freelance payments has never been easier</h1>
          <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
        </div>
        <div class="image_box">
          <img src={Handimage} alt="credit card on hand" />
        </div>
      </div>
    </div>
  )
}

export default Hero
