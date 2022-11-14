import React from "react"
import "../assets/scss/SectionHeading.scss"
import Quotesvg from "../assets/images/quote.svg"
import { sectionHeadingData } from "../data"
import Quote from "./reuseable/Quote"
const SectionHeading = () => {
  return (
    <div className="section_heading_container">
      {sectionHeadingData.map((item, key) => (
        <div key={item.key} className="section_heading_wrapper">
          <div className="section_heading_content">
            <h2>{item.title}</h2>
            <p>
              {item.content}
            </p>
          </div>
          <Quote quote={item.quote} author={item.author} img={Quotesvg} />
        </div>
      ))}
    </div>
  )
}

export default SectionHeading
