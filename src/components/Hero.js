import React from "react"
import Header from "./Header"
import "../assets/scss/Hero.scss"
import Handimage from "../assets/images/hand.png"
import Tick from "../assets/images/tick.png"
import Sidesvg from "../assets/images/fill1.svg"
const Hero = () => {
  return (
    <div className="hero_container">
      <Header />
      <div className="container">
        <div className="hero_title_box">
          <h1>Managing freelance payments has never been easier</h1>
          <p>
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing.
          </p>
          <div className="hero_button_box">
            <button>Get Started</button>
            <div className="wave-box">
              <div className="play_button">
                <div className="triangle"></div>
              </div>
              <div className="iq-waves">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </div>
            </div>
            <div className="play-button-text">See How It Works</div>
          </div>
          <div className="bellow-button-tick">
            <div className="first-tick-box">
              <div className="tick"><img src={Tick} alt = "" /></div>
              <div className="text">Free Register</div>
            </div>
            <div className="second-tick-box">
              <div className="tick"><img src={Tick} alt = "" /></div>
              <div className="text">Great Service</div>
            </div>
          </div>
        </div>
        <div className="image_box">
          <img className ="hand-image" src={Handimage} alt="credit card on hand" />
        </div>
      </div>
      <img className = "hero-side-svg" src={Sidesvg} alt="" />
    </div>
  )
}

export default Hero
