import React from "react"
import Header from "./Header"
import "../assets/scss/Hero.scss"
import { heroData } from "../data"
import Fill from "../assets/images/62.svg"
import Fill2 from "../assets/images/24.svg"
import Fill3 from "../assets/images/fill1.svg"
const Hero = () => {
  return (
    <div className="hero_container">
      <Header />
      <img className="fill1" src={Fill} alt="" />
      <img className="fill2" src={Fill2} alt="" />
      <img className="fill3" src={Fill3} alt="" />
      {heroData.map((item, key) => (
        <div className="container">
          <div className="hero_title_box">
            <h1>{item.title}</h1>
            <p>
              {item.content}
            </p>
            <div className="hero_button_box">
              <button>{item.button}</button>
              <div className="wave_box">
                <div className="play_button">
                  <div className="triangle"></div>
                </div>
                <div className="iq_waves">
                  <div className="waves wave_1"></div>
                  <div className="waves wave_2"></div>
                  <div className="waves wave_3"></div>
                </div>
              </div>
              <div className="play_button_text">{item.playButtonText}</div>
            </div>
            <div className="bellow_button_tick">
              <div className="first_tick_box">
                <div className="tick">
                  <img src={item.tickImg} alt="" />
                </div>
                <div className="text">{item.tick1}</div>
              </div>
              <div className="second_tick_box">
                <div className="tick">
                  <img src={item.tickImg} alt="" />
                </div>
                <div className="text">{item.tick2}</div>
              </div>
            </div>
          </div>
          <div className="image_box">
            <img src={item.heroImage} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Hero
