import React from "react"
import "../assets/scss/SectionHeading.scss"
import Quote from "../assets/images/quote.svg"
const SectionHeading = () => {
  return (
    <div className="section_heading_container">
      <div className="section_heading_wrapper">
        <div className="section_heading_content">
          <h2>Automated portfolio tracking</h2>
          <p>
            Yet bed any for traveling assistance indulgence unpleasing. Not
            thoughts all exercise blessing.
          </p>
        </div>
        <div className="section_heading_quote">
          <img src={Quote} alt="quote" />
          <div className="quote">
            <q>
              Wise busy past both park when an ye no. Nay likely her length
              sooner thrown sex lively income. The expense windows adapted sir.
              Wrong widen.
            </q>
          </div>
          <div className="author">
            <p>- Mike Taylor, Web Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionHeading
