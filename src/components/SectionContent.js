import React from "react"
import { sectionContentData, profitsData, sectionContentDataOne } from "../data"
import "../assets/scss/SectionContent.scss"
import Greensvg from "../assets/images/greencircle.svg"
import Orangesvg from "../assets/images/orangecircle.svg"
import Bluesvg from "../assets/images/bluecircle.png"
import Quotesvg from "../assets/images/quote.svg"
import Ovel from "../assets/images/ovel.svg"
import Quote from "./reuseable/Quote"
const SectionContent = () => {
  return (
    <div className="section_container">
      {sectionContentData.map((item, key) => (
        <div className="section_wrapper">
          <div className="section_left">
            <img className="green" src={Greensvg} alt="" />
            <img className="orange" src={Orangesvg} alt="" />
            <img className="blue" src={Bluesvg} alt="" />
            <img className="ovel" src={Ovel} alt="" />
            {profitsData.map((item, key) => (
              <div key={item.key} className={item.class}>
                <div className="person_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="person_content">
                  <div className="profit_amount">{item.amount}</div>
                  <div className="message">{item.msg}</div>
                </div>
              </div>
            ))}


          </div>
          <div className="section_right">
            <div className="small_text_top">{item.toptext}</div>
            <div className="right_title">
              <h2>{item.title}</h2>
            </div>
            <div className="right_paragraph">
              <p>{item.content}</p>
            </div>
            <div className="hr"></div>
            <div className="list_box">
              <div className="list">
                <img src={item.tick} alt="" />
                <li>{item.bullets1}</li>
              </div>
              <div className="list">
                <img src={item.tick} alt="" />
                <li>{item.bullets2}</li>
              </div>
              <div className="list">
                <img src={item.tick} alt="" />
                <li>{item.bullets3}</li>
              </div>
            </div>
          </div>
        </div>
      ))}

      {sectionContentDataOne.map((item, key) => (
        <div className="section_wrapper">
          <div className="section_right">
            <div className="small_text_top">{item.toptext}</div>
            <div className="right_title">
              <h2>{item.title}</h2>
            </div>
            <div className="right_paragraph">
              <p>{item.content}</p>
            </div>
            <Quote quote={item.quote} author={item.author} img={Quotesvg} />
          </div>
          <div className="section_left">

          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionContent
