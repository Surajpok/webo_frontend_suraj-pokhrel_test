import React from "react"
import "../assets/scss/SectionHeading.scss"
import Quote from "../assets/images/quote.svg"
import { sectionHeadingData } from "../data"
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
          <div className="section_heading_quote">
            <img src={Quote} alt="quote" />
            <div className="quote">
              <q>
                {item.quote}
              </q>
            </div>
            <div className="author">
              <p>{item.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionHeading
